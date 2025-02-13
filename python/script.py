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

def get_next_update_branch(cwd):
    """Obtém o próximo número de update baseado nos branches existentes."""
    branches = run_git_command(['git', 'branch', '-r'], cwd).split('\n')
    updates = [b.strip().split('/')[-1] for b in branches if 'update_' in b]
    
    if updates:
        updates = [int(b.split('_')[1]) for b in updates if b.split('_')[1].isdigit()]
        last_update = max(updates) if updates else 34
    else:
        last_update = 34  # Agora inicia do 34

    return f'update_{last_update + 1}'

def auto_commit():
    """Executa o fluxo de commit e push automático, mesmo sem alterações."""
    repo_path = "E:/web-sites/portfolio"  # Caminho do seu repositório Git
    next_update = get_next_update_branch(repo_path)
    print(f'Criando commit para {next_update}')

    # Puxa as últimas mudanças
    subprocess.run(['git', 'pull', 'origin', 'main'], check=True, cwd=repo_path)

    # Adiciona todas as mudanças (não importa se há ou não)
    subprocess.run(['git', 'add', '.'], check=True, cwd=repo_path)

    # Faz o commit
    commit_message = f'Atualização automática: {next_update} - {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}'
    subprocess.run(['git', 'commit', '--allow-empty', '-m', commit_message], check=True, cwd=repo_path)  # --allow-empty força o commit

    # Faz o push
    subprocess.run(['git', 'push', 'origin', 'main'], check=True, cwd=repo_path)

    print(f'Commit {next_update} realizado com sucesso!')

if __name__ == "__main__":
    # Configuração inicial do Git (somente se necessário)
    if not run_git_command(['git', 'config', 'user.name'], cwd="E:/web-sites/portfolio"):
        subprocess.run(['git', 'config', '--global', 'user.name', 'EduardoDosSantosFerreira'], check=True)
    if not run_git_command(['git', 'config', 'user.email'], cwd="E:/web-sites/portfolio"):
        subprocess.run(['git', 'config', '--global', 'user.email', 'eduardosferreira69@gmail.com'], check=True)

    while True:
        try:
            auto_commit()
        except Exception as e:
            print(f'Erro durante o commit: {e}')
        
        print('Aguardando 24 horas para o próximo commit...')
        time.sleep(86400)  # Aguarda 24 horas
