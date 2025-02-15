import os
import time
import subprocess
from datetime import datetime

def run_git_command(command, cwd):
    """Executa um comando Git no diretório especificado e retorna a saída como string."""
    try:
        return subprocess.check_output(command, stderr=subprocess.DEVNULL, cwd=cwd).decode().strip()
    except subprocess.CalledProcessError:
        return ""

def auto_commit():
    """Executa o fluxo de commit e push automático, mesmo sem alterações."""
    repo_path = "E:/web-sites/portfolio"
    print('Criando commit automático')

    subprocess.run(['git', 'pull', 'origin', 'main'], check=True, cwd=repo_path)
    subprocess.run(['git', 'add', '.'], check=True, cwd=repo_path)
    
    commit_message = f'auto_update:({datetime.now().strftime("%Y-%m-%d")})-({datetime.now().strftime("%H:%M:%S")})'
    subprocess.run(['git', 'commit', '--allow-empty', '-m', commit_message], check=True, cwd=repo_path)
    subprocess.run(['git', 'push', 'origin', 'main'], check=True, cwd=repo_path)
    
    print('Commit realizado com sucesso!')

def configure_git(repo_path):
    """Configura o usuário do Git, se necessário."""
    if not run_git_command(['git', 'config', 'user.name'], cwd=repo_path):
        subprocess.run(['git', 'config', '--global', 'user.name', 'EduardoDosSantosFerreira'], check=True)
    if not run_git_command(['git', 'config', 'user.email'], cwd=repo_path):
        subprocess.run(['git', 'config', '--global', 'user.email', 'eduardosferreira69@gmail.com'], check=True)

if __name__ == "__main__":
    repo_path = "E:/web-sites/portfolio"
    configure_git(repo_path)
    
    while True:
        try:
            auto_commit()
        except Exception as e:
            print(f'Erro durante o commit: {e}')
        
        print('Aguardando 24 horas para o próximo commit...')
        time.sleep(86400)
