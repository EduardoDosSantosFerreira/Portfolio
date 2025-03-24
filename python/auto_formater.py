import os
import jsbeautifier
import cssbeautifier
from bs4 import BeautifulSoup

# Lista de caminhos dos arquivos
file_paths = [
    r"E:\web-sites\Portfolio\src\pages\home.html",
    r"E:\web-sites\Portfolio\index.html",
    r"E:\web-sites\Portfolio\src\assets\css\aos.css",
    r"E:\web-sites\Portfolio\src\assets\css\bootstrap.min.css",
    r"E:\web-sites\Portfolio\src\assets\css\nav.css",
    r"E:\web-sites\Portfolio\src\assets\css\styleforhome.css",
    r"E:\web-sites\Portfolio\src\assets\js\components\ftr.js",
    r"E:\web-sites\Portfolio\src\assets\js\components\navscript.js",
    r"E:\web-sites\Portfolio\src\assets\js\main.js"
]

def format_html(content):
    """Formata código HTML"""
    soup = BeautifulSoup(content, "html.parser")
    return soup.prettify()

def format_css(content):
    """Formata código CSS"""
    return cssbeautifier.beautify(content)

def format_js(content):
    """Formata código JavaScript"""
    return jsbeautifier.beautify(content)

# Mapeamento de extensões para formatadores
formatters = {
    ".html": format_html,
    ".css": format_css,
    ".js": format_js
}

def format_file(file_path):
    """Lê, formata e sobrescreve o arquivo"""
    if not os.path.isfile(file_path):
        print(f"[ERRO] Arquivo não encontrado: {file_path}")
        return
    
    _, ext = os.path.splitext(file_path)
    
    if ext in formatters:
        try:
            with open(file_path, "r", encoding="utf-8") as file:
                content = file.read()
            
            formatted_content = formatters[ext](content)
            
            with open(file_path, "w", encoding="utf-8") as file:
                file.write(formatted_content)
            
            print(f"[OK] Arquivo formatado: {file_path}")
        except Exception as e:
            print(f"[ERRO] Falha ao formatar {file_path}: {e}")

# Formatar todos os arquivos
for path in file_paths:
    format_file(path)

print("\n Formatação concluída!")
