# coding: utf-8
import fitz
from pathlib import Path
base = Path(r"C:\Users\Adao_Elias\Desktop\ES")
pdfs = sorted([p for p in base.iterdir() if p.suffix.lower()==".pdf"])
saida = base / "EXTRACAO_RESUMO.md"
with saida.open("w",encoding="utf-8") as fh:
    fh.write("# EXTRACAO\n\n")
    for p in pdfs:
        try:
            doc = fitz.open(p)
            fh.write("## " + p.name + "\n")
            fh.write("- Paginas: " + str(len(doc)) + "\n\n")
            for i in range(min(3,len(doc))):
                txt = doc[i].get_text("text")
                if txt.strip():
                    fh.write("### Pagina " + str(i+1) + "\n\n")
                    fh.write(txt.strip() + "\n\n")
                    fh.write("---\n\n")
            fh.write("\n\n")
            doc.close()
        except Exception as e:
            fh.write("## " + p.name + "\n- ERRO: " + str(e) + "\n\n")
    fh.write("\n# FIM\n")
print("OK")
