import os
import time
import subprocess
import re

def run_git_command(command, cwd):
    """Executa um comando Git no diretório especificado e retorna a saída como string."""
    try:
        return subprocess.check_output(command, stderr=subprocess.DEVNULL, cwd=cwd).decode().strip()
    except subprocess.CalledProcessError:
        return ""

def get_next_update_branch(cwd):
    """Obtém o próximo número de update baseado nos branches existentes."""
    branches = run_git_command(['git', 'branch', '-r'], cwd).split('\n')
    updates = []
    
    pattern = re.compile(r'update_v(\d+)')
    for branch in branches:
        match = pattern.search(branch)
        if match:
            updates.append(int(match.group(1)))
    
    last_update = max(updates) if updates else 0  # Se não houver update, inicia do 1
    return f'update_v{last_update + 1}'

def auto_commit():
    """Executa o fluxo de commit e push automático."""
    repo_path = "E:/web-sites/portfolio"  # Caminho do repositório Git
    next_update = get_next_update_branch(repo_path)
    print(f'Criando commit para {next_update}')

    # Puxa as últimas mudanças
    subprocess.run(['git', 'pull', 'origin', 'main'], check=True, cwd=repo_path)

    # Adiciona todas as mudanças
    subprocess.run(['git', 'add', '.'], check=True, cwd=repo_path)

    # Faz o commit com mensagem corrigida
    subprocess.run(['git', 'commit', '--allow-empty', '-m', next_update], check=True, cwd=repo_path)

    # Faz o push
    subprocess.run(['git', 'push', 'origin', 'main'], check=True, cwd=repo_path)

    print(f'Commit {next_update} realizado com sucesso!')

if __name__ == "__main__":
    while True:
        try:
            auto_commit()
        except Exception as e:
            print(f'Erro durante o commit: {e}')
        
        print('Aguardando 24 horas para o próximo commit...')
        time.sleep(86400)  # Aguarda 24 horas
