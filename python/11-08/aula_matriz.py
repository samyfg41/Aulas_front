'''
1 - Função para criar uma matriz (lista de lista)
2 - Função que recebe a matriz númerica por parâmetro e retorna a soma de todos os elementos
3 - Função para imprimir a soma dos elementos da matriz
'''

def criar_matriz(n_linhas, n_colunas):
    matriz = []
    for item in range(n_linhas):
        linha = []
        for j in range(n_colunas):
            n = int(input('Número: '))
            linha.append(n)
        matriz.append(linha)
    return matriz

def somar_elementos(matriz):
    soma = 0 #var acumuladora
    for linha in range(len(matriz)):
        for coluna in range(len(matriz[linha])):
            soma+= matriz[linha][coluna]
    return soma

def imprimir(soma):
    print(f'Soma total: {soma}')

def main():
    matriz = criar_matriz(3, 3)
    soma = somar_elementos(matriz)
    imprimir(soma)

#programa principal
main()