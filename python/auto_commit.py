import subprocess
from datetime import datetime

def run_git_command(command):
    """Executa um comando Git e retorna a saída como string."""
    try:
        return subprocess.check_output(command, stderr=subprocess.DEVNULL).decode().strip()
    except subprocess.CalledProcessError:
        return ""

def auto_commit():
    """Executa o fluxo de commit e push automático."""
    print(f'Criando commit...')

    # Puxa as últimas mudanças
    subprocess.run(['git', 'pull', 'origin', 'main'], check=True)

    # Adiciona todas as mudanças (se houver) ou mesmo sem mudanças
    subprocess.run(['git', 'add', '.'], check=True)

    # Faz o commit com --allow-empty para permitir commits sem alterações
    commit_message = f'Atualização automática: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}'
    subprocess.run(['git', 'commit', '--allow-empty', '-m', commit_message], check=True)

    # Faz o push
    subprocess.run(['git', 'push', 'origin', 'main'], check=True)

    print(f'Commit realizado com sucesso: {commit_message}')

if __name__ == "__main__":
    # Configuração inicial do Git (somente se necessário)
    if not run_git_command(['git', 'config', 'user.name']):
        subprocess.run(['git', 'config', '--global', 'user.name', 'Seu Nome'], check=True)
    if not run_git_command(['git', 'config', 'user.email']):
        subprocess.run(['git', 'config', '--global', 'user.email', 'seuemail@example.com'], check=True)

    auto_commit()