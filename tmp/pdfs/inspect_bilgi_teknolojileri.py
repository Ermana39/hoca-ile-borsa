from pathlib import Path
from pypdf import PdfReader

source = Path(r"C:\Users\erman\OneDrive\Desktop\Ders _ BİLGİ TEKNOLOJİLERİ - eKitap.pdf")
text_out = Path(r"C:\Projeler\hoca-ile-borsa\tmp\pdfs\bilgi_teknolojileri_source.txt")
reader = PdfReader(str(source))
print(f"pages={len(reader.pages)}")
print(f"metadata={reader.metadata}")
try:
    print(f"outline_items={len(reader.outline)}")
except Exception as exc:
    print(f"outline_error={exc}")

parts = []
for index, page in enumerate(reader.pages, start=1):
    text = page.extract_text() or ""
    parts.append(f"\n\n===== PDF SAYFA {index} =====\n{text}")
text_out.write_text("".join(parts), encoding="utf-8")
print(f"text_chars={sum(len(p) for p in parts)}")
print(f"text_out={text_out}")
