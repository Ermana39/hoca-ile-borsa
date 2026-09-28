import re
from pathlib import Path

source = Path(r"C:\Projeler\hoca-ile-borsa\tmp\pdfs\bilgi_teknolojileri_source.txt")
lines = source.read_text(encoding="utf-8").splitlines()

heading_re = re.compile(r"^(?:[1-8](?:\.\d+){0,4}\.?\s*|Bölüm Özeti$|Ünite Soruları$)")
for line_no, raw in enumerate(lines, start=1):
    line = raw.strip()
    if heading_re.match(line) and len(line) <= 180:
        print(f"{line_no}: {line}")
