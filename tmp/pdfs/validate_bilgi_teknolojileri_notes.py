from pathlib import Path
from pypdf import PdfReader

pdf = Path(r"C:\Projeler\hoca-ile-borsa\output\pdf\bilgi-teknolojileri-calisma-notlari.pdf")
reader = PdfReader(str(pdf))
texts = [(page.extract_text() or "") for page in reader.pages]
joined = "\n".join(texts)
print(f"pages={len(reader.pages)}")
print(f"blank_pages={[i + 1 for i, text in enumerate(texts) if len(text.strip()) < 30]}")
print(f"units={sum(f'ÜNİTE {i}' in joined for i in range(1, 9))}")
print(f"mock={'32 SORULUK DENEME' in joined}")
print(f"answers={'DENEME CEVAP ANAHTARI' in joined}")
print(f"chars={sum(len(text) for text in texts)}")
print(f"bytes={pdf.stat().st_size}")
