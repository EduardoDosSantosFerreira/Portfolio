import os
import time
import subprocess
from datetime import datetime

def run_git_command(command):
    """Executa um comando Git e retorna a saída como string."""
    try:
        return subprocess.check_output(command, stderr=subprocess.DEVNULL).decode().strip()
    except subprocess.CalledProcessError:
        return ""

def get_next_update_branch():
    """Obtém o próximo número de update baseado nos branches existentes."""
    os.chdir("E:\\web-sites\\portfolio")  # Garante que o comando será executado no diretório correto

    branches = run_git_command(['git', 'branch', '-r']).split('\n')
    updates = [b.strip().split('/')[-1] for b in branches if 'update_' in b]
    
    if updates:
        updates = [int(b.split('_')[1]) for b in updates if b.split('_')[1].isdigit()]
        last_update = max(updates) if updates else 34
    else:
        last_update = 34  # Agora inicia do 34

    return f'update_{last_update + 1}'

def auto_commit():
    """Executa o fluxo de commit e push automático."""
    next_update = get_next_update_branch()
    print(f'Criando commit para {next_update}')

    # Puxa as últimas mudanças
    subprocess.run(['git', 'pull', 'origin', 'main'], check=True)

    # Verifica se há alterações antes de tentar adicionar e fazer o commit
    status = run_git_command(['git', 'status', '--porcelain'])

    if status:  # Se houver alterações
        # Adiciona todas as mudanças
        subprocess.run(['git', 'add', '.'], check=True)

        # Faz o commit
        commit_message = f'Atualização automática: {next_update} - {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}'
        subprocess.run(['git', 'commit', '-m', commit_message], check=True)

        # Faz o push
        subprocess.run(['git', 'push', 'origin', 'main'], check=True)

        print(f'Commit {next_update} realizado com sucesso!')
    else:
        print(f'Nenhuma alteração para o commit {next_update}.')

if __name__ == "__main__":
    # Configuração inicial do Git (somente se necessário)
    if not run_git_command(['git', 'config', 'user.name']):
        subprocess.run(['git', 'config', '--global', 'user.name', 'EduardoDosSantosFerreira'], check=True)
    if not run_git_command(['git', 'config', 'user.email']):
        subprocess.run(['git', 'config', '--global', 'user.email', 'eduardosferreira69@gmail.com'], check=True)

    while True:
        try:
            auto_commit()
        except Exception as e:
            print(f'Erro durante o commit: {e}')
        
        print('Aguardando 24 horas para o próximo commit...')
        time.sleep(86400)  # Aguarda 24 horas
