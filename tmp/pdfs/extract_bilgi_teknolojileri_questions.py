import re
from pathlib import Path

text = Path(r"C:\Projeler\hoca-ile-borsa\tmp\pdfs\bilgi_teknolojileri_source.txt").read_text(encoding="utf-8")
text = re.sub(r"===== PDF SAYFA \d+ =====", " ", text)
text = re.sub(r"\d{2}\.\d{2}\.\d{4} \d{2}:\d{2} Ders : BİLGİ TEKNOLOJİLERİ - eKitap", " ", text)
text = re.sub(r"about:blank \d+/135", " ", text)
for match in re.finditer(r"Soru-(\d+)\s*:\s*(.*?)Cevap-\1\s*:\s*(.*?)(?=Soru-\d+\s*:|\Z)", text, flags=re.S):
    number, body, answer = match.groups()
    question = re.sub(r"\s+", " ", body).strip()
    answer = re.sub(r"\s+", " ", answer).strip()
    # Answer is generally the first line/value; cap accidental trailing material.
    answer = answer.split(" Kaynakça", 1)[0].split(" Ünite Soruları", 1)[0]
    if len(answer) > 180:
        answer = answer[:180] + "…"
    print(f"S{number}: {question[:500]}")
    print(f"C{number}: {answer}")
