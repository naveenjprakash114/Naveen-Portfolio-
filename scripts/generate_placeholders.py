import zlib
import struct
import subprocess
import os

def make_png(filename, width, height, rgb_func):
    def chunk(tag, data):
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)

    rows = []
    for y in range(height):
        row = [0]
        for x in range(width):
            r, g, b = rgb_func(x, y, width, height)
            row.extend([r, g, b])
        rows.append(bytes(row))
    raw_data = b''.join(rows)

    ihdr = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    png = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr) + chunk(b'IDAT', zlib.compress(raw_data)) + chunk(b'IEND', b'')
    with open(filename, 'wb') as f:
        f.write(png)

def convert_to_jpg(png_path, jpg_path):
    os.makedirs(os.path.dirname(jpg_path), exist_ok=True)
    subprocess.run(['sips', '-s', 'format', 'jpeg', png_path, '--out', jpg_path], check=True, stdout=subprocess.DEVNULL)
    os.remove(png_path)

# Subtle warm luxury gradients
def warm_beige_gradient(x, y, w, h):
    # Base #F8F5EF -> #E9DDCB with subtle vignette
    t = (x / w * 0.4 + y / h * 0.6)
    r = int(248 - t * 15)
    g = int(245 - t * 24)
    b = int(239 - t * 36)
    return (max(0, min(255, r)), max(0, min(255, g)), max(0, min(255, b)))

def taupe_charcoal_gradient(x, y, w, h):
    t = (y / h)
    r = int(183 - t * 40)
    g = int(165 - t * 35)
    b = int(141 - t * 30)
    return (max(0, min(255, r)), max(0, min(255, g)), max(0, min(255, b)))

def soft_cream_gradient(x, y, w, h):
    t = ((x + y) / (w + h))
    r = int(245 - t * 12)
    g = int(242 - t * 18)
    b = int(235 - t * 28)
    return (max(0, min(255, r)), max(0, min(255, g)), max(0, min(255, b)))

images_to_create = [
    ('public/images/profile.jpg', 800, 1000, warm_beige_gradient),
    ('public/images/about.jpg', 800, 1000, soft_cream_gradient),
    ('public/images/og-preview.jpg', 1200, 630, warm_beige_gradient),
    ('public/images/projects/arulmathi-silks/cover.jpg', 1200, 800, warm_beige_gradient),
    ('public/images/projects/arulmathi-silks/01.jpg', 1000, 750, soft_cream_gradient),
    ('public/images/projects/arulmathi-silks/02.jpg', 1000, 750, taupe_charcoal_gradient),
    ('public/images/projects/arulmathi-silks/03.jpg', 1000, 750, warm_beige_gradient),
    ('public/images/projects/hashtag-clothings/cover.jpg', 1200, 800, soft_cream_gradient),
    ('public/images/projects/hashtag-clothings/01.jpg', 1000, 750, warm_beige_gradient),
    ('public/images/projects/hashtag-clothings/02.jpg', 1000, 750, taupe_charcoal_gradient),
    ('public/images/projects/hashtag-clothings/03.jpg', 1000, 750, soft_cream_gradient),
    ('public/images/projects/photography/cover.jpg', 1200, 800, taupe_charcoal_gradient),
    ('public/images/projects/photography/01.jpg', 1000, 750, warm_beige_gradient),
    ('public/images/projects/photography/02.jpg', 1000, 750, soft_cream_gradient),
    ('public/images/projects/videography/cover.jpg', 1200, 800, warm_beige_gradient),
    ('public/images/projects/videography/01.jpg', 1000, 750, taupe_charcoal_gradient),
    ('public/images/projects/creative/cover.jpg', 1200, 800, soft_cream_gradient),
    ('public/images/projects/creative/01.jpg', 1000, 750, warm_beige_gradient),
    ('public/images/services/photography.jpg', 800, 600, taupe_charcoal_gradient),
    ('public/images/services/marketing.jpg', 800, 600, warm_beige_gradient),
    ('public/images/services/branding.jpg', 800, 600, soft_cream_gradient),
    ('public/images/services/ai-design.jpg', 800, 600, taupe_charcoal_gradient),
    ('public/images/services/uiux.jpg', 800, 600, warm_beige_gradient),
    ('public/images/services/frontend.jpg', 800, 600, soft_cream_gradient),
]

for path, w, h, fn in images_to_create:
    png_tmp = path + '.png'
    os.makedirs(os.path.dirname(path), exist_ok=True)
    # Downscale slightly for placeholder generation speed
    make_png(png_tmp, w // 4, h // 4, fn)
    convert_to_jpg(png_tmp, path)
    print(f"Generated {path}")

print("All placeholders generated successfully!")

