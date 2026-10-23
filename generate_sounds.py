import wave, struct, math, random, os

os.makedirs('assets/sounds', exist_ok=True)
sample_rate = 44100

def create_sound(filename, duration, attack_t, decay_pow, hp_freq, center_freq, q, flutter_freq, flutter_depth, vol, noise_type='mixed'):
    num_samples = int(sample_rate * duration)
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0
    raw = [0.0] * num_samples
    
    for i in range(num_samples):
        t = i / sample_rate
        white = random.uniform(-1.0, 1.0)
        
        # Envolvente suave
        if t < attack_t:
            env = math.sin((t / attack_t) * (math.pi / 2))
        else:
            rel = (t - attack_t) / max(0.001, duration - attack_t)
            env = math.pow(max(0.0, 1.0 - rel), decay_pow)
            
        flutter = 1.0 + flutter_depth * math.sin(2 * math.pi * flutter_freq * t)
        
        # Pink noise
        b0 = 0.99886 * b0 + white * 0.0555179
        b1 = 0.99332 * b1 + white * 0.0750759
        b2 = 0.96900 * b2 + white * 0.1538520
        b3 = 0.86650 * b3 + white * 0.3104856
        b4 = 0.55000 * b4 + white * 0.5329522
        b5 = -0.7616 * b5 - white * 0.0168980
        pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362
        b6 = white * 0.115926
        
        if noise_type == 'white':
            sig = white
        elif noise_type == 'pink':
            sig = pink
        else:
            sig = white * 0.65 + pink * 0.35
            
        raw[i] = sig * env * flutter

    # Filtro Paso Alto (Eliminar cualquier golpe o frecuencias < hp_freq)
    rc_hp = 1.0 / (2 * math.pi * hp_freq)
    dt = 1.0 / sample_rate
    alpha_hp = rc_hp / (rc_hp + dt)
    hp_prev_in = hp_prev_out = 0.0
    hp_out = [0.0] * num_samples
    for i in range(num_samples):
        v = raw[i]
        out = alpha_hp * (hp_prev_out + v - hp_prev_in)
        hp_prev_in = v
        hp_prev_out = out
        hp_out[i] = out

    # Filtro Biquad Band-pass estándar (Audio EQ Cookbook)
    # H(s) = s / (s^2 + s/Q + 1)
    w0 = 2 * math.pi * center_freq / sample_rate
    alpha_bp = math.sin(w0) / (2 * q)
    b0_bp = alpha_bp
    b1_bp = 0.0
    b2_bp = -alpha_bp
    a0_bp = 1.0 + alpha_bp
    a1_bp = -2.0 * math.cos(w0)
    a2_bp = 1.0 - alpha_bp

    bp_out = [0.0] * num_samples
    x1 = x2 = y1 = y2 = 0.0
    for i in range(num_samples):
        x0 = hp_out[i]
        y0 = (b0_bp/a0_bp)*x0 + (b1_bp/a0_bp)*x1 + (b2_bp/a0_bp)*x2 - (a1_bp/a0_bp)*y1 - (a2_bp/a0_bp)*y2
        x2 = x1
        x1 = x0
        y2 = y1
        y1 = y0
        bp_out[i] = y0

    max_v = max(abs(s) for s in bp_out) or 1.0
    path = os.path.join('assets/sounds', filename)
    with wave.open(path, 'w') as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(sample_rate)
        for s in bp_out:
            norm = (s / max_v) * vol
            int_sample = int(max(-32768, min(32767, norm * 32767)))
            wf.writeframes(struct.pack('<h', int_sample))
    print(f'Created {path} ({os.path.getsize(path)} bytes)')

# 1. Revista Satinada (Suave y sedoso, el preferido para flipbook)
create_sound('revista_suave.wav', duration=0.38, attack_t=0.07, decay_pow=1.6, hp_freq=900, center_freq=2600, q=1.2, flutter_freq=28, flutter_depth=0.22, vol=0.72)

# 2. Libro Clásico (Papel bond natural, crujiente y ligero)
create_sound('libro_clasico.wav', duration=0.34, attack_t=0.05, decay_pow=1.4, hp_freq=750, center_freq=2200, q=1.5, flutter_freq=35, flutter_depth=0.35, vol=0.75)

# 3. Pergamino Cálido (Textura rica y profunda, sin golpe seco)
create_sound('pergamino.wav', duration=0.44, attack_t=0.09, decay_pow=1.3, hp_freq=600, center_freq=1800, q=1.1, flutter_freq=22, flutter_depth=0.28, vol=0.78, noise_type='pink')

# 4. Brisa Ligera / Swoosh (Aéreo, moderno y limpio)
create_sound('brisa_swoosh.wav', duration=0.30, attack_t=0.08, decay_pow=1.8, hp_freq=1100, center_freq=3200, q=1.3, flutter_freq=18, flutter_depth=0.15, vol=0.68)

# 5. Susurro Sutil (Minimalista, muy tenue para no interrumpir)
create_sound('susurro_sutil.wav', duration=0.26, attack_t=0.06, decay_pow=2.2, hp_freq=1300, center_freq=3000, q=1.6, flutter_freq=15, flutter_depth=0.10, vol=0.45)
