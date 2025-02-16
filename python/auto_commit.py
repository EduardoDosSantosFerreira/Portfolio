import os
import subprocess

def auto_commit():
    repo_path = "E:/web-sites/portfolio"
    os.chdir(repo_path)

    print("Atualizando repositório...")

    subprocess.run(["git", "pull"], check=True)

    print("Adicionando alterações...")
    subprocess.run(["git", "add", "."], check=True)

    print("Criando commit...")
    subprocess.run(["git", "commit", "-m", "Commit automático"], check=True)

    print("Enviando para o repositório remoto...")
    subprocess.run(["git", "push"], check=True)

    print("Processo concluído.")

if __name__ == "__main__":
    auto_commit()
