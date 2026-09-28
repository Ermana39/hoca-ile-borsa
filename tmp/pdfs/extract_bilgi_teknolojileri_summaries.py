from pathlib import Path

lines = Path(r"C:\Projeler\hoca-ile-borsa\tmp\pdfs\bilgi_teknolojileri_source.txt").read_text(encoding="utf-8").splitlines()
for i, line in enumerate(lines):
    if line.strip() == "Bölüm Özeti":
        print(f"\n===== {line.strip()} @ line {i+1} =====")
        for raw in lines[i + 1 : i + 8]:
            text = raw.strip()
            if text.startswith("Kaynakça") or text.startswith("Ünite Soruları"):
                break
            if "Ders : BİLGİ TEKNOLOJİLERİ" in text or text.startswith("about:blank"):
                continue
            print(text)
