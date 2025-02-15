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

def get_next_update_branch(cwd, start=38):
    """Obtém o próximo número de update baseado nos branches existentes."""
    branches = run_git_command(['git', 'branch', '-r'], cwd).split('\n')
    updates = [b.strip().split('/')[-1] for b in branches if b.strip().startswith('update_v')]
    
    update_numbers = [int(b.split('_v')[1]) for b in updates if b.split('_v')[1].isdigit()]
    next_update = max(update_numbers, default=start - 1) + 1
    
    return f'update_v{next_update}'

def git_setup(repo_path, user_name, user_email):
    """Configura usuário e e-mail do Git se necessário."""
    if not run_git_command(['git', 'config', 'user.name'], cwd=repo_path):
        subprocess.run(['git', 'config', '--global', 'user.name', user_name], check=True)
    if not run_git_command(['git', 'config', 'user.email'], cwd=repo_path):
        subprocess.run(['git', 'config', '--global', 'user.email', user_email], check=True)

def auto_commit(repo_path):
    """Executa o fluxo de commit e push automático, mesmo sem alterações."""
    next_update = get_next_update_branch(repo_path)
    print(f'[{datetime.now()}] Criando commit para {next_update}')
    
    try:
        subprocess.run(['git', 'pull', 'origin', 'main'], check=True, cwd=repo_path)
        subprocess.run(['git', 'add', '.'], check=True, cwd=repo_path)
        commit_message = next_update
        subprocess.run(['git', 'commit', '--allow-empty', '-m', commit_message], check=True, cwd=repo_path)
        subprocess.run(['git', 'push', 'origin', 'main'], check=True, cwd=repo_path)
        print(f'[{datetime.now()}] Commit {next_update} realizado com sucesso!')
    except subprocess.CalledProcessError as e:
        print(f'[{datetime.now()}] Erro durante o commit: {e}')

def main():
    repo_path = "E:/web-sites/portfolio"  # Caminho do seu repositório Git
    user_name = "EduardoDosSantosFerreira"
    user_email = "eduardosferreira69@gmail.com"
    
    git_setup(repo_path, user_name, user_email)
    
    while True:
        auto_commit(repo_path)
        print('Aguardando 24 horas para o próximo commit...')
        time.sleep(86400)  # Aguarda 24 horas

if __name__ == "__main__":
    main()
