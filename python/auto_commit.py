import os
import subprocess

def run_command(command):
    result = subprocess.run(command, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Erro: {result.stderr}")

def auto_commit():
    repo_path = "E:/web-sites/portfolio"
    os.chdir(repo_path)

    print("Atualizando repositório...")
    run_command(["git", "pull"])

    print("Adicionando alterações...")
    run_command(["git", "add", "."])

    print("Criando commit...")
    run_command(["git", "commit", "-m", "Commit automático"])

    print("Enviando para o repositório remoto...")
    run_command(["git", "push"])

    print("Processo concluído.")

if __name__ == "__main__":
    auto_commit()
