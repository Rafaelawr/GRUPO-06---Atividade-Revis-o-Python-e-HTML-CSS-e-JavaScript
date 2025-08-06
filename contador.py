# Atividade 1
# Em python, desenvolva uma função chamada contator que recebe uma string e retorna
# um dicionário contendo a contagem das ocorrências de cada palavra presente na string.
# As palavras devem ser consideradas em minúsculas e separadas por espaços, descon"
# siderando qualquer pontuação.
# Exemplo:
# contator("Esse exercício é um exercício fácil ou difícil")
# Retorno:
# {'esse': 1, 'exercício': 2, 'é': 1, 'um': 1, 'fácil': 1, 'ou': 1, 'difícil': 1}
# Observações:
# • A função deve ignorar a diferença entre letras maiúsculas e minúsculas.
# • A contagem deve incluir todas as palavras, mesmo que apareçam mais de uma vez.


def contador (texto):
    n= 0
    nova = {}
    for i in texto:
        if i in nova: nova [i] +=1
        else: nova [i]= 1
    return nova


           

frase = input("Digite uma frase: ")

lista = frase.split()

retorno = contador(lista)
print(retorno)
