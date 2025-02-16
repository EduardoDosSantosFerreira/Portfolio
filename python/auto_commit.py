import os
import subprocess
import datetime

# Configurações do Git (caso precise definir nome e e-mail)
GIT_USERNAME = "EduardoDosSantosFerreira"
GIT_EMAIL = "eduardosferreira69@gmail.com"

# Caminho do repositório (ajuste para o seu diretório)
REPO_PATH = r"E:/web-sites/portfolio"

# Mensagem do commit com timestamp
commit_message = f"Commit automático - {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"

def run_git_command(command):
    """Executa um comando Git no repositório especificado"""
    result = subprocess.run(command, cwd=REPO_PATH, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Erro ao executar: {command}")
        print(result.stderr)
    else:
        print(result.stdout)

def auto_commit():
    """Executa o fluxo completo de commit automático"""
    print("🔄 Atualizando repositório...")
    run_git_command("git pull origin main")  # Atualiza antes de commitar

    print("🔧 Configurando nome e e-mail do Git...")
    run_git_command(f'git config user.name "{GIT_USERNAME}"')
    run_git_command(f'git config user.email "{GIT_EMAIL}"')

    print("📂 Adicionando arquivos...")
    run_git_command("git add .")

    print("📌 Criando commit...")
    run_git_command(f'git commit -m "{commit_message}"')

    print("🚀 Enviando para o repositório...")
    run_git_command("git push origin main")

    print("✅ Processo finalizado!")

if __name__ == "__main__":
    auto_commit()