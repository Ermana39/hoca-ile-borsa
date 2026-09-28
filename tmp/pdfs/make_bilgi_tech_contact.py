from pathlib import Path
from PIL import Image, ImageDraw

folder = Path(r"C:\Projeler\hoca-ile-borsa\tmp\pdfs\bilgi-tech-render")
files = sorted(folder.glob("page-*.png"))
thumb_w = 240
gap = 12
cols = 5
thumbs = []
for index, file in enumerate(files, start=1):
    image = Image.open(file).convert("RGB")
    ratio = thumb_w / image.width
    thumb = image.resize((thumb_w, int(image.height * ratio)))
    canvas = Image.new("RGB", (thumb_w, thumb.height + 24), "white")
    canvas.paste(thumb, (0, 24))
    ImageDraw.Draw(canvas).text((6, 5), f"Sayfa {index}", fill="black")
    thumbs.append(canvas)

rows = (len(thumbs) + cols - 1) // cols
cell_h = max(t.height for t in thumbs)
sheet = Image.new("RGB", (cols * thumb_w + (cols + 1) * gap, rows * cell_h + (rows + 1) * gap), "#D9E1E6")
for index, thumb in enumerate(thumbs):
    x = gap + (index % cols) * (thumb_w + gap)
    y = gap + (index // cols) * (cell_h + gap)
    sheet.paste(thumb, (x, y))
out = Path(r"C:\Projeler\hoca-ile-borsa\tmp\pdfs\bilgi-tech-contact.png")
sheet.save(out)
print(out)
