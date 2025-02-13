import os
import subprocess
from datetime import datetime

def get_next_update_branch():
    # Muda para o diretório do repositório Git
    os.chdir("E:\\web-sites\\portfolio")

    # Obtém a lista de branches remotos
    branches = subprocess.check_output(['git', 'branch', '-r']).decode().split('\n')
    updates = [b.strip().split('/')[-1] for b in branches if 'update_' in b]
    
    # Obtém o último número de update
    if updates:
        updates.sort(key=lambda x: int(x.split('_')[1]))
        last_update = int(updates[-1].split('_')[1])
    else:
        last_update = 31  # Começa do 31 se não houver updates detectados
    
    return f'update_{last_update + 1}'

def auto_commit():
    next_update = get_next_update_branch()
    print(f'Criando commit para {next_update}')
    
    # Configurar o Git
    subprocess.run(['git', 'config', '--global', 'user.name', 'EduardoDosSantosFerreira'])
    subprocess.run(['git', 'config', '--global', 'user.email', 'eduardosferreira69@gmail.com'])
    
    # Puxa as últimas mudanças
    subprocess.run(['git', 'pull', 'origin', 'main'])
    
    # Adiciona todas as mudanças
    subprocess.run(['git', 'add', '.'])
    
    # Faz o commit
    commit_message = f'Atualização automática: {next_update} - {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}'
    subprocess.run(['git', 'commit', '-m', commit_message])
    
    # Faz o push
    subprocess.run(['git', 'push', 'origin', 'main'])
    print(f'Commit {next_update} realizado com sucesso!')

if __name__ == "__main__":
    while True:
        auto_commit()
        print('Aguardando 24 horas para o próximo commit...')
        time.sleep(86400)  # Aguarda 24 horas
