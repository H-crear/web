from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent
FRAMES_DIR = ROOT / "frames"
SHOTLIST = ROOT / "shotlist.txt"

SCENES = [
    ("接到一个展示项目", "Conflict setup", 1.5),
    ("时间紧，要求高", "Pressure rising", 1.5),
    ("单打独斗容易卡住", "Bottleneck", 2.0),
    ("引入 AI 协同分工", "Turning point", 2.5),
    ("Codex 把关方向", "Planning and gates", 3.0),
    ("Claude 主实现页面", "Execution speed", 3.0),
    ("12 个案例自动渲染", "Data-driven content", 2.5),
    ("一键启动可演示", "Demo ready", 2.0),
    ("首页成品展示", "Result section", 2.5),
    ("作品页筛选展示", "Navigation and filtering", 2.0),
    ("详情页链路打通", "Detail storytelling", 2.0),
    ("协同页证据展示", "Workflow evidence", 1.5),
    ("网站 + 视频素材包", "Dual deliverables", 2.0),
    ("Codex × Claude 协同效率", "Final statement", 2.0),
]

PALETTE = [
    ("#1a2330", "#2d4f7a", "#f8d9a0"),
    ("#2d1a28", "#7a3f5c", "#f3c7d7"),
    ("#1f2a1f", "#2f6f5b", "#d8e6c0"),
    ("#2f2220", "#9e4f3a", "#f5d3b5"),
    ("#192630", "#33627e", "#c6e2f4"),
    ("#2d2218", "#7a5c3d", "#efddb4"),
    ("#2c1c34", "#684c8a", "#ddcef3"),
    ("#1f2b31", "#3f6470", "#c6e3ec"),
    ("#2e2e1e", "#6f6f34", "#e1e5bd"),
    ("#241f34", "#524b88", "#d3cff9"),
    ("#1f3130", "#36665d", "#c2e2dc"),
    ("#34251f", "#7a4f42", "#efd3cb"),
    ("#1b2a3a", "#325d86", "#cce2f6"),
    ("#2f1f27", "#7a4158", "#f0c8d8"),
]


def pick_font(size: int, bold: bool = False):
    candidates = []
    if bold:
        candidates.extend(
            [
                r"C:\Windows\Fonts\msyhbd.ttc",
                r"C:\Windows\Fonts\simhei.ttf",
                r"C:\Windows\Fonts\arialbd.ttf",
            ]
        )
    else:
        candidates.extend(
            [
                r"C:\Windows\Fonts\msyh.ttc",
                r"C:\Windows\Fonts\simsun.ttc",
                r"C:\Windows\Fonts\arial.ttf",
            ]
        )
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size=size)
    return ImageFont.load_default()


def wrap_text(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont, max_width: int):
    words = list(text)
    lines = []
    current = ""
    for ch in words:
        trial = current + ch
        width = draw.textbbox((0, 0), trial, font=font)[2]
        if width <= max_width:
            current = trial
        else:
            lines.append(current)
            current = ch
    if current:
        lines.append(current)
    return lines


def render_scene(index: int, zh_text: str, en_text: str):
    bg, accent, glow = PALETTE[index % len(PALETTE)]
    img = Image.new("RGB", (1080, 1920), bg)
    draw = ImageDraw.Draw(img, "RGBA")

    # Layers and shapes
    draw.rectangle((0, 0, 1080, 420), fill=(*ImageColor.getrgb(accent), 90))
    draw.ellipse((680, 120, 1180, 620), fill=(*ImageColor.getrgb(glow), 72))
    draw.ellipse((-100, 1320, 520, 1940), fill=(*ImageColor.getrgb(glow), 50))
    draw.rounded_rectangle((60, 180, 1020, 1760), radius=40, outline=(255, 255, 255, 120), width=3)
    draw.rounded_rectangle((100, 300, 980, 700), radius=34, fill=(14, 14, 14, 90))
    draw.rounded_rectangle((100, 760, 980, 1600), radius=34, fill=(255, 255, 255, 22))

    title_font = pick_font(64, bold=True)
    subtitle_font = pick_font(40, bold=False)
    small_font = pick_font(28, bold=False)
    tiny_font = pick_font(24, bold=False)

    draw.text((120, 220), "CODEX × CLAUDE", font=small_font, fill=(248, 246, 238, 255))
    draw.text((120, 265), "COLLABORATION SHOWCASE", font=tiny_font, fill=(222, 224, 230, 255))

    lines = wrap_text(draw, zh_text, title_font, 820)
    y = 860
    for line in lines:
        draw.text((120, y), line, font=title_font, fill=(253, 246, 232, 255))
        y += 84

    draw.text((120, y + 28), en_text, font=subtitle_font, fill=(220, 231, 242, 230))
    draw.text((120, 1690), f"SHOT {index + 1:02d} / 14", font=small_font, fill=(233, 230, 220, 240))
    draw.text((120, 1742), "Shanhe Atelier · Demo Draft", font=tiny_font, fill=(203, 210, 219, 240))

    out = FRAMES_DIR / f"shot-{index + 1:02d}.png"
    img.save(out, "PNG")
    return out


def build():
    FRAMES_DIR.mkdir(parents=True, exist_ok=True)
    generated = []
    for idx, (zh, en, _duration) in enumerate(SCENES):
        generated.append(render_scene(idx, zh, en))

    lines = []
    for idx, path in enumerate(generated):
        abs_path = path.resolve().as_posix()
        lines.append(f"file '{abs_path}'")
        lines.append(f"duration {SCENES[idx][2]}")
    # Concat demuxer requires last frame listed again for final duration handling.
    lines.append(f"file '{generated[-1].resolve().as_posix()}'")
    SHOTLIST.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"generated_frames={len(generated)}")
    print(f"shotlist={SHOTLIST}")


if __name__ == "__main__":
    # Lazy import to keep lints simple for environments without ImageColor.
    from PIL import ImageColor

    build()
