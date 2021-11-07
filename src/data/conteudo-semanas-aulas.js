export const content = {
    conteudo: {
        semana1: {
            exercicios: [],
            conteudo: [
                'Apresentação',
                'Funcionamento de aplicações Web',
                'Entendendo uma página html',
                'Estrutura básica de uma página (html, head, title, body)',
                'Tags (strong, h, p, br, hr, li, ol, ul, div)',
                'Tags 2 (header, footer, section)',
                'Estilos inline (font, color, background, text-align)',
                'Formulários e div',
                'Classes em css',
                'Padding e Margin',
                'Seletores',
                'Box-model',
                'Float',
                'Media (video, img, áudio)'
            ],
            dias: {
                segunda: {
                    exercicios: true,
                    conteudo: [
                        'Apresentação',
                        'Funcionamento de aplicações Web',
                        'Entendendo uma página html']
                },
                terca: {
                    exercicios: false,
                    conteudo: [
                        'Estrutura básica de uma página (html, head, title, body)',
                        'Tags (strong, h, p, br, hr, li, ol, ul, div)',
                        'Tags 2 (header, footer, section)',
                        'Estilos inline (font, color, background, text-align)'
                    ]
                },
                quarta: {
                    exercicios: false,
                    conteudo: [
                        'Formulários e div',
                        'Classes em css',
                        'Padding e Margin']
                },
                quinta: {
                    exercicios: false,
                    conteudo: [
                        'Seletores',
                        'Box-model',
                        'Float',
                        'Media (video, img, áudio)'
                    ]
                },
                sexta: {
                    exercicios: false,
                    conteudo: ['Tira duvidas']
                },
            }
        },
        semana2: {
            exercicios: [],
            conteudo: [
                'Fluxos e Processos',
                'Variáveis e tipos de dados',
                'Integração html/js',
                'Operadores lógicos',
                'Estruturas condicionais',
                'integração entre html e js',
                'Estruturas de repetição',
                'integração entre html e js',
                'Funções',
                'integração entre html e js'
            ],
            dias: {
                segunda: {
                    exercicios: false,
                    conteudo: [
                        'Fluxos e Processos',
                        'Variáveis e tipos de dados',
                        'Integração html/js'
                    ]
                },
                terca: {
                    exercicios: false,
                    conteudo: [
                        'Operadores lógicos',
                        'Estruturas condicionais',
                        'integração entre html e js'
                    ]
                },
                quarta: {
                    exercicios: false,
                    conteudo: [
                        'Estruturas de repetição',
                        'integração entre html e js'
                    ]
                },
                quinta: {
                    exercicios: false,
                    conteudo: [
                        'Funções',
                        'integração entre html e js'
                    ]
                },
                sexta: {
                    exercicios: false,
                    conteudo: ['Tira duvidas']
                }
            }
        },
        semana3: {
            exercicios: [
                {
                    title: '[SP03] - Ex 1 - Calcule automaticamente a idade',
                    description: 'Faça uma página HTML contendo um label que exiba a mensagem “Insira sua data de nascimento”, um campo de texto que só permita inserir data (dica: input type date) e um botão rotulado “calcular idade”. Programe uma função a ser executada quando o usuário clicar no botão, que faça o cálculo da idade do usuário, e então exiba a idade em um texto na página HTML.',
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana3/segunda/exercicios-semana/calculo-idade.html' },
                    target: "_blank",
                },
                {
                    title: '[SP03] - Ex 2 - Construa uma calculadora simples',
                    description: 'Faça uma página HTML contendo 2 campos de texto (dica: input type number), para que o usuário possa inserir, em cada um, o valor que deseja calcular. Coloque também na sua página 4 botões, um indicando soma, outro subtração, outro multiplicação, e outro divisão. Adicione um outro campo de texto, apenas leitura (readonly). Quando o usuário clicar no botão de soma (multiplicação, divisão ou subtração), a sua página deve somar (multiplicar, dividir ou subtrair) os 2 valores inseridos pelo usuário e exibir o resultado no campo de texto readonly. Programe essa interatividade utilizando JavaScript.',
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana3/segunda/exercicios-semana/calc-simple.html' },
                    target: "_blank",
                },
                {
                    title: '[SP03] - Ex 3 - Programe um verificador de números pares',
                    description: 'Em uma página HTML, insira um campo de texto para que o usuário insira um número. Programe uma função em JavaScript para verificar se o número inserido pelo usuário é par ou ímpar, e informe o usuário através de um texto na página HTML.',
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana3/segunda/exercicios-semana/verifica-par-impar.html' },
                    target: "_blank",
                },
                {
                    title: '[SP03] - Ex 4 - Faça um relógio',
                    description: 'Construa uma página HTML contendo um texto que informa o horário no momento de acesso, no formato “23:59” (HH:mm).',
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana3/segunda/exercicios-semana/relogio.html' },
                    target: "_blank",
                },
                {
                    title: '[SP03] - Ex 5 - Faça um relógio que atualize automaticamente',
                    description: 'Construa uma página HTML contendo um texto que informa o horário atual, no formato “23:59”, e que atualize automaticamente o valor, sempre que mudar o horário.',
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana3/segunda/exercicios-semana/relogio-auto.html' },
                    target: "_blank",
                },
                {
                    title: '[SP03] - Ex 6 - Informe a estação do ano no dia de acesso',
                    description: 'Sua página deve conter um texto e uma imagem, ambos representando a estação. Ao carregar a página, baseado na data atual, seu código deve verificar qual a estação atual do ano no hemisfério sul, e deve alterar o texto e a imagem, para que passem a representar a estação correta. Considere: 22/12 a 21/03 - Verão; 22/03 a 21/06 - Outono; 22/06 a 21/09 - Inverno; 22/09 a 21/12 - Primavera.',
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana3/segunda/exercicios-semana/estacoes.html' },
                    target: "_blank",
                },
                {
                    title: '[SP03] - Ex 7 - Faça uma página de “lista de mercado”',
                    description: 'Sua página deve possibilitar ao usuário inserir itens em uma lista e exibir a lista atualizada a medida que forem sendo adicionados novos itens. A página deve conter um rótulo (<label>) “Item a adicionar:” seguido de um campo de texto onde o usuário possa digitar o item. Deve conter também um botão “Adicionar”, que no momento do clique do usuário deve inserir o item digitado na lista. Se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto. A página também deve conter uma lista (<select>), que exibirá os itens adicionados pelo usuário.',
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana3/segunda/exercicios-semana/lista-mercado.html' },
                    target: "_blank",
                },
                {
                    title: '[SP03] - Ex 8 - Salve a lista de mercado',
                    description: 'Utilizando a mesma página do exercício anterior, adicione um novo botão “Salvar lista”. Quando o usuário clicar nesse botão, a lista de itens de mercado deve ser salva no Local Storage do navegador.',
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana3/segunda/exercicios-semana/lista-mercado.html' },
                    target: "_blank",
                },
                {
                    title: '[SP03] - Ex 9 - Carregue uma lista salva anteriormente',
                    description: 'Utilizando a mesma página dos 2 exercícios anteriores ( [SP03] - Ex 7 e [SP03] - Ex 8 ), crie um novo botão “Carregar lista”, que ao ser clicado deve buscar no Local Storage se existe uma lista de itens de mercado salva, e em caso positivo deve mostrar os itens no elemento da página. Caso não haja nenhuma lista previamente salva, deve informar o usuário “Não há itens salvos”.',
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana3/segunda/exercicios-semana/lista-mercado.html' },
                    target: "_blank",
                },
                {
                    title: '[SP03] - Ex 10 - Construa uma “calculadora” de P.A. e P.G',
                    description: 'Na página HTML devem existir 2 campos de texto (dica: input type number): um rotulado (label) “valor inicial”, e outro rotulado “raíz”. Também deve ter 2 botões: um rotulado “Calcular P.A.” e outro rotulado “Calcular P.G.”. O evento click de cada botão deve chamar uma função que: verifica se os campos estão preenchidos (dica: length) e, se estiverem vazios, deve mostrar uma mensagem ao usuário pedindo para inserir os valores; caso os campos estejam preenchidos, deve calcular os 10 primeiros valores da sequência e exibir na tela. Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28. P.G. (Progressão Geométrica) é como uma P.A., mas em vez de somar, multiplica-se a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.G. = 1, 3, 9, 27, 81...',
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana3/segunda/exercicios-semana/calc-pa-pg.html' },
                    target: "_blank",
                }
            ],
            conteudo: [
                'DOM',
                'Manipulação do DOM',
                'As aulas de Terça e Quarta possiem o mesmo conteudo devido ao Desafio',
                'Eventos',
                'Kanban',
                'localStorage'
            ],
            dias: {
                segunda: {
                    exercicios: true,
                    conteudo: [
                        'Kanban',
                        'localStorage'
                    ]
                },
                terca: {
                    exercicios: false,
                    conteudo: [
                        'DOM',
                        'Manipulação do DOM',
                        'Eventos'
                    ]
                },
                quarta: {
                    exercicios: false,
                    conteudo: [
                        'DOM',
                        'Manipulação do DOM',
                        'Eventos'
                    ]
                },
                quinta: {
                    exercicios: false,
                    conteudo: [
                        'JSON',
                        'Interval',
                        'Timeout'
                    ]
                },
                sexta: {
                    exercicios: false,
                    conteudo: ['Tira duvidas']
                },
            }
        },
        semana4: {
            exercicios: [],
            conteudo: [
                'Flexbox',
            ],
            dias: {
                segunda: {
                    exercicios: true,
                    conteudo: [
                        'Flexbox',
                        'Resolução de exercícios',
                        'Criação de página utilizando conceitos de HTML, CSS e Flexbox',
                        'Finalizar lista de exercícios',
                        'Git',
                        'Github',
                        'Criação de um site portfólio com conceitos de flexbox',
                        'Entendendo o git por linha de comando',
                        'Principais comandos a serem utilizados',
                        'Gitflow',
                        'Criação de repositório no Github',
                        'GitHub Desktop'
                    ]
                },
                terca: {
                    exercicios: false,
                    conteudo: [
                        'Resolução de exercícios',
                        'Criação de página utilizando conceitos de HTML, CSS e Flexbox'
                    ]
                },
                quarta: {
                    exercicios: false,
                    conteudo: [
                        'Finalizar lista de exercícios',
                        'Git',
                        'Github',
                        'Criação de um site portfólio com conceitos de flexbox'
                    ]
                },
                quinta: {
                    exercicios: false,
                    conteudo: [
                        'Entendendo o git por linha de comando',
                        'Principais comandos a serem utilizados',
                        'Gitflow',
                        'Criação de repositório no Github',
                        'GitHub Desktop'
                    ]
                },
                sexta: {
                    exercicios: false,
                    conteudo: ['Tira duvidas']
                },
            }
        },
        semana5: {
            exercicios: [
                {
                    title: '[SP05] - Ex1 - Let, Var, Const, Classes e Atributos',
                    description: `Faaaala Dev!
                    Sei que você gosta mais de codificar, mas preciso de sua ajuda!
                    Estamos aumentando a equipe para desenvolver um Banco Digital (fintech) e alguns estagiários irão começar na semana que vem. Sendo assim, preciso que você escreva um documento 'readme.md' explicando o seguinte:
                    - Diferenças entra let, var e const;
                    - O que são classes e atributos, e o porque devemos utilizar.
                    Tente deixar tudo o mais resumido possível, assim podemos enviar para os novos integrantes. Vamos compartilhar nosso conhecimento. :D
                    `,
                    done: true,
                    url: { pathname: 'https://github.com/meirelesdev/devinhouse/tree/main/semana5/segunda/exercicios-semana' },
                    target: "_blank",
                },
                {
                    title: '[SP05] - Ex2 - Lista de clientes',
                    description: `Faaaala Dev!
                    O time de gerência financeira necessita de uma lista com o nome dos nossos 10 melhores clientes.
                    
                    Para exemplificar essa tarefa, crie um array json com o nome e saldo da conta bancária dos nossos 10 melhores clientes (invente os nomes e os saldos). Na sequência, utilizando o ‘map‘ pegue a variável nome e apresente em uma página HTML.
                    `,
                    done: true,
                    url: { pathname: 'https://github.com/meirelesdev/devinhouse/blob/main/semana5/segunda/exercicios-semana/clientes.json' },
                    target: "_blank",
                },
                {
                    title: '[SP05] - Ex3 - Lista de possíveis investidores',
                    description: `Faaaala Dev!
                    O time de TI está trabalhando em um novo algoritmo para entender os possíveis investidores dentro da nossa fintech.
                    
                    Utilizando o mesmo array criado na questão anterior, filtre os nomes dos 5 clientes com maior potencial de investimento. Utilize o ‘filter’ e o saldo da conta bancária como parâmetro, e apresente o resultado em uma página HTML.
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana5/segunda/exercicios-semana/investidores.html' },
                    target: "_blank",
                },
                {
                    title: '[SP05] - Ex4 - [Bug Fix] Página de clientes',
                    description: `Faaaala Dev!
                    O time de experiência do usuário reportou que precisamos alertar o usuário quando ele chegar ao final da lista de clientes, pois alguns usuários estão entendendo que a lista irá continuar carregando.
                    
                    Para isso, crie uma função que recebendo o array criado anteriormente, imprima item por item e adicione um 'console.log' quando o código estiver passando por sua última iteração. Ex: Se temos um array de 3 itens, quando o forEach chegar no terceiro item, ele deve enviar um console.log dizendo que chegou no último item. Utilize o ‘forEach’ para manter o código organizado.
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana5/segunda/exercicios-semana/loading.html' },
                    target: "_blank",
                },
                {
                    title: '[SP05] - Ex5 - Cadastro de endereço',
                    description: `Faaaala Dev!
                    Precisamos cadastrar o endereço do cliente.
                    
                    Crie uma classe Endereço. Endereco possui os seguintes atributos: Logradouro, número, cidade, estado, país, cep.
                    `,
                    done: true,
                    url: { pathname: 'https://github.com/meirelesdev/devinhouse/blob/main/semana5/segunda/exercicios-semana/Address.js' },
                    target: "_blank",
                },
                {
                    title: '[SP05] - Ex6 - Cadastramento de novos clientes',
                    description: `Faaaala Dev!
                    Precisamos cadastrar os dados dos novos clientes.
                    
                    Crie uma classe Cliente. Cliente possui os seguintes atributos: nome, cpf, endereco, número de celular.
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana5/segunda/exercicios-semana/class-cliente.html' },
                    target: "_blank",
                },
                {
                    title: '[SP05] - Ex7 - Método para criação de conta',
                    description: `Faaaala Dev!
                    Agora que já temos o cadastro do cliente e os dados de endereço, precisamos criar uma conta de banco digital.
                    
                    Crie uma classe Conta. Conta possui os seguintes atributos:
                    número da conta, saldo e Cliente.
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana5/segunda/exercicios-semana/class-conta.html' },
                    target: "_blank",
                },
                {
                    title: '[SP05] - Ex8 - Bug Fix! CNPJ no campo de CPF',
                    description: `Faaaala Dev!
                    O time de experiência do cliente avisou que alguns usuários estão cadastrando o CNPJ no lugar do CPF. Precisamos validar o número inserido ...
                    
                    Valide o CPF do cliente. Crie um método na classe Cliente chamada validaCPF() que retorna “CPF válido” caso o cpf inserido seja válido. Caso o CPF seja inválido, retorna um erro e limpa o campo cpf.
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana5/segunda/exercicios-semana/class-cliente.html' },
                    target: "_blank",
                },
                {
                    title: '[SP05] - Ex9 - Implementação de transações',
                    description: `Faaaala Dev!
                    Lembra que avisei que o PIX estava chegando? Então, precisamos criar a classe para fazer transações bancárias.
                    
                    Crie uma Classe Transações. Crie uma classe chamada transações, que só possui os métodos: “conta” e “valorDaTransação”. A classe possui dois métodos, Transferência e Depósito. Nas quais debita e credita na conta, respectivamente.
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana5/segunda/exercicios-semana/transferencia.html' },
                    target: "_blank",
                },
                {
                    title: '[SP05] - Ex10 - [Bug Fix] Transações bancárias',
                    description: `Faaaala Dev!
                    Passei para lembrar que o banco central orientou sobre a geração de um identificador de transferência em todas as transações.
                    
                    Adicione os seguintes atributos na classe transacoes: “idDeTransferencia” (será incrementado automaticamente para cada transação), “númeroDaConta”(que está recebendo a transação), “data” (dia e horário da transação).
                    `,
                    done: true,
                    url: { pathname: 'https://github.com/meirelesdev/devinhouse/blob/main/semana5/segunda/exercicios-semana/Transaction.js' },
                    target: "_blank",
                }
            ],
            conteudo: [
                'ECMAScript',
                'Escopo',
                'forEach',
                'map',
                'filter',
                'Spread e Rest operators',
                'Destructuring',
                'Arrow Functions',
                'Template Strings',
                'Classes & Objetos',
                'Programação Orientada a Objetos',
                'Encapsulamento & Closures',
                'Resolução de exercícios'
            ],
            dias: {
                segunda: {
                    exercicios: true,
                    conteudo: [
                        'ECMAScript',
                        'Escopo',
                        'forEach',
                        'map',
                        'filter'
                    ]
                },
                terca: {
                    exercicios: false,
                    conteudo: [
                        'Spread e Rest operators',
                        'Destructuring',
                        'Arrow Functions',
                        'Template Strings'
                    ]
                },
                quarta: {
                    exercicios: false,
                    conteudo: [
                        'Classes & Objetos',
                        'Programação Orientada a Objetos',
                        'Encapsulamento & Closures'
                    ]
                },
                quinta: {
                    exercicios: false,
                    conteudo: ['Resolução de exercícios']
                },
                sexta: {
                    exercicios: false,
                    conteudo: ['Tira duvidas']
                },
            }
        },
        semana6: {
            exercicios: [
                {
                    title: '[SP06] - Ex 1 - Array.forEach',
                    description: `Dada a seguinte lista, utilizando o método forEach, imprima no console cada um dos elementos, seguidos de seu índice, no formato "Índice - Nome”.

                    [ “Banana”, “Morango”, “Maçã”, “Uva”, “Pêra” ]
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana6/segunda/exercicios-semana/forEach.html' },
                    target: "_blank",
                },
                {
                    title: '[SP06] - Ex 2 - Array.map, lista de números',
                    description: `Dado o seguinte array, crie um novo array utilizando o método Array.map, onde cada valor seja igual à multiplicação do valor da lista original pelo seu antecessor.
                    Ex:
                    
                        arrayOriginal: [ 2, 4, 6, 8 ]  -> arrayResultado: [ 2, 8, 24, 48 ]
                    
                    Lista: [ 3, 5, 7, 9, 11, 13 ]
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana6/segunda/exercicios-semana/map.html' },
                    target: "_blank",
                },
                {
                    title: '[SP06] - Ex 3 - Array.map, lista de objetos',
                    description: `Dada a seguinte lista de clientes, crie uma nova lista onde cada um dos objetos tenha as propriedades do cliente mais a propriedade “ativo” com o valor booleano true.
                    Lista: [
                        { id: 1, cliente: “João Celso de Souza”, idade: 33 },
                        { id: 2, cliente: “Claudia Cipriano”, idade: 28 },
                        { id: 3, cliente: “Edilene Souza Silva”, idade: 41 },
                        { id: 4, cliente: “Maurício Gomes”. idade: 17 },
                        { id: 5, cliente: “Claudia Cipriano”, idade: 22 }
                    ]`,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana6/segunda/exercicios-semana/map3.html' },
                    target: "_blank",
                },
                {
                    title: '[SP06] - Ex 4 - Array.Filter, lista de objetos',
                    description: `Usando o array resultante do exercício 3, utilize o método filter para criar um novo array com os clientes com idade acima de 25 anos.`,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana6/segunda/exercicios-semana/filter.html' },
                    target: "_blank",
                },
                {
                    title: '[SP06] - Ex 5 - Classes',
                    description: `Uma classe agrupa características e comportamentos de algo, que pode ser um objeto palpável ou algo abstrato.

                    Crie 2 classes que representam objetos reais e duas classes que representem objetos abstratos, cada uma com pelo menos 2 atributos, que serão recebidos em seus respectivos métodos construtores durante a instanciação.
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana6/segunda/exercicios-semana/classes.html' },
                    target: "_blank",
                },
                {
                    title: '[SP06] - Ex 6 - Classes, estado',
                    description: `No objeto instanciado a partir da classe abaixo, quais são os valores de seu estado?
                    class Lanterna {
                        constructor ( lumens, estaLigada ) {
                            this._lumens = lumens
                            this._estaLigada = estaLigada
                     } 
                     }
                    
                    const lanternaDeBolso = new Lanterna( 600, true )
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana6/segunda/exercicios-semana/classes2.html' },
                    target: "_blank",
                },
                {
                    title: '[SP06] - Ex 7 - Classes, comportamento',
                    description: `No objeto instanciado a partir da classe abaixo, quais são os seus comportamentos?
                    class Lanterna {
                        constructor ( lumens, estaLigada ) {
                            this._lumens = lumens
                            this._estaLigada = estaLigada
                     } 
                    ligar ( ) { this._estaLigada = true }
                     }
                    
                    const lanternaDeBolso = new Lanterna( 600, true )`,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana6/segunda/exercicios-semana/classes-comportamento.html' },
                    target: "_blank",
                },
                {
                    title: '[SP06] - Ex 8 - Módulos JavaScript',
                    description: `Antigamente, o JavaScript era utilizado para adicionar pequenas interações e animações em páginas da web. Com o avanço da utilização, os scripts passaram a ficar muito grandes e complexos.

                    Posto este cenário, quais as duas maiores vantagens de se utilizar módulos no JavaScript?
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana6/segunda/exercicios-semana/modulos.html' },
                    target: "_blank",
                },
                {
                    title: '[SP06] - Ex 9 - Módulos JavaScript - desafio 1',
                    description: `1 - Crie um arquivo HTML, e no body, adicione uma div com o id “root”.
                    <body>
                      <div id="root"></div>
                    </body>                    
                    2 - Crie um arquivo app.js, com o seguinte código:

                    let elementoRaiz = document.getElementById("root")
                    const conteudo = montaConteudo(usuario)
                    registraElemento(elementoRaiz, conteudo)
                    
                    3 - Crie um arquivo usuario.js com um objeto com as seguintes propriedades, e coloque qualquer valor (pode ser com suas informações, se quiser):
                        nome
                        idade
                        linguagemPreferida
                        objetivo
                    
                    4 - Crie um terceiro arquivo, o funcoes.js, e coloque o seguinte conteúdo:

                    function registraElemento (elemento, conteudo) {
                      elemento.innerHTML = conteudo
                    }
                    
                    function montaConteudo  (objeto) {
                      return (
                        <div>
                          <p>Nome: \${objeto.nome}</p>
                          <p>Idade: \${objeto.idade}</p>
                          <p>Linguagem preferida: \${objeto.linguagemPreferida}</p>
                          <p>Objetivo de carreira: \${objeto.objetivo}</p>
                        </div>
                      
                      )
                    }`,
                    done: true,
                    url: { pathname: 'https://github.com/meirelesdev/devinhouse/tree/main/semana6/segunda/exercicios-semana/js/modulos' },
                    target: "_blank",
                },
                {
                    title: '[SP06] - Ex 10 - Módulos JavaScript - desafio 2',
                    description: `Dado o exercício anterior, faça as ações necessárias para que o HTML imprima o conteúdo do seu objeto.
                    Instruções:
                    - Deve usar módulos
                    - Deve importar no HTML somente o arquivo app.js
                    - Você pode usar importações nomeadas ou default. Fica a seu critério.
                    - Não há necessidade de alterar o conteúdo dos arquivos javascript anterior
                    
                    Você conseguiu perceber que separamos, em arquivos JS diferentes, a criação do objeto e as funções responsáveis pela criação do HTML? Caso queira exercitar o aprendizado, tente criar uma lista de usuários (um array com objetos de usuário) e imprimir cada usuário com sua respectiva lista de características no HTML!
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana6/segunda/exercicios-semana/modulos-desafio.html' },
                    target: "_blank",
                }
            ],
            conteudo: [
                'Revisão de Array.forEach',
                'Revisão de Array.map',
                'Revisão de Array.filter',
                'Um pouquinho de Orientação a Objetos',
                'Classes, estado e comportamento',
                'Encapsulamento, getters e setters',
                'Módulos javascript',
                'Import e export',
                'Desenvolver o Housebook'
            ],
            dias: {
                segunda: {
                    exercicios: true,
                    conteudo: [
                        'Revisão de Array.forEach',
                        'Revisão de Array.map',
                        'Revisão de Array.filter'
                    ]
                },
                terca: {
                    exercicios: false,
                    conteudo: [
                        'Um pouquinho de Orientação a Objetos',
                        'Classes, estado e comportamento',
                        'Encapsulamento, getters e setters'
                    ]
                },
                quarta: {
                    exercicios: false,
                    conteudo: [
                        'Módulos javascript',
                        'Import e export'
                    ]
                },
                quinta: {
                    exercicios: false,
                    conteudo: [
                        'Desenvolver o Housebook'
                    ]
                },
                sexta: {
                    exercicios: false,
                    conteudo: ['Tira Duvidas']
                },
            }
        },
        semana7: {
            exercicios: [
                {
                    title: '[SP07] - Ex 1 - JavaScript assíncrono',
                    description: `Levando em consideração o que estudamos em sala de aula, qual será a ordem de execução dos console.log abaixo?
                    console.log(“primeiro”)
                    setTimeout(console.log, 0, “segundo”)
                    setTimeout(console.log, 2, “terceiro”)
                    setTimeout(console.log, 1, “quarto”)
                    console.log(“quinto”)
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana7/segunda/exercicios-semana/ex1.html' },
                    target: "_blank",
                },
                {
                    title: '[SP07] - Ex 2 - JavaScript assíncrono',
                    description: `Quando terminamos de executar uma função setInterval ou setTimeout, ela é incluída imediatamente na pilha de execução (call stack) ou na fila de callback (callback queue)? Em que momento as funções da pilha de callback são colocadas na fila de execução?
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana7/segunda/exercicios-semana/ex2.html' },
                    target: "_blank",
                },
                {
                    title: '[SP07] - Ex 3 - Promise',
                    description: `Crie uma Promise para cada situação abaixo. Utilize os callbacks abaixo para exibir o valor:

                    function callbackSucesso ( valor ) {
                        console.log(“Sucesso:”, valor )
                    }
                    
                    function callbackRejeicao ( valor ) {
                        console.log(“Erro:”, valor )
                    }
                    
                    1. Uma Promise que resolva imediatamente com o valor “Olá, mundo!”
                    2. Uma Promise que rejeita imediatamente com o erro “Ops, caí no onRejected!” e seja capturada em um callback no método .then
                    3. Uma Promise que resolva depois de 5 segundos com o valor “Olá, mundo, 5 segundos depois!”)
                    4. Uma Promise que rejeite 2 segundos depois com o valor “Ops, caí no catch!” e seja capturada em um método .catch
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana7/segunda/exercicios-semana/ex3.html' },
                    target: "_blank",
                },
                {
                    title: '[SP07] - Ex 4 - Promise',
                    description: `A Promise a seguir executa um código que retorna um determinado valor. Identifique se esse valor é um erro (rejeição) ou um valor válido

                    const promise = new Promise ( (callbackUm, callbackDois) => {
                        callbackDois(“Este valor é um resolve ou um reject???”)
                    })
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana7/segunda/exercicios-semana/ex4.html' },
                    target: "_blank",
                },
                {
                    title: '[SP07] - Ex 5 - Promise',
                    description: `O objeto Promise tem dois métodos estáticos que podem ser chamados para retornarem ou rejeitarem imediatamente um valor. Quais são esses métodos estáticos? Cite um exemplo com cada um.

                    Dica: métodos estáticos são diferentes de métodos de instância, e não usamos a palavra reservada “new” para chamá-los.
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana7/segunda/exercicios-semana/ex5.html' },
                    target: "_blank",
                },
                {
                    title: '[SP07] - Ex 6 - Promise',
                    description: `Crie uma função que retorne uma Promise que resolve após 3 segundos com o objeto abaixo.

                    const credentials = {
                        username: “usuario”,
                        email: “usuario@email.com”,
                    authorized: true
                     }
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana7/segunda/exercicios-semana/ex6.html' },
                    target: "_blank",
                },
                {
                    title: '[SP07] - Ex 7 - Promises - fetch',
                    description: `Usando a função fetch, faça uma requisição ao endereço abaixo e, após converter o retorno para json usando o método .json(), imprima o nome do personagem (response.name):
                    https://swapi.dev/api/people/4/
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana7/segunda/exercicios-semana/ex7.html' },
                    target: "_blank",
                },
                {
                    title: '[SP07] - Ex 8 - Promises - async / await',
                    description: `No exercício 6, você criou uma função que retornava uma promise que resolvia, após 3 segundos, com um objeto converta esta função para a forma async / await.
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana7/segunda/exercicios-semana/ex8.html' },
                    target: "_blank",
                },
                {
                    title: '[SP07] - Ex 9 - Promises - fetch, async / await',
                    description: `No exercício 7, você consome um webservice utilizando a função fetch, que retorna uma promise. Converta o seu código para utilizar async / await. 

                    Lembre-se: precisamos de uma função assíncrona para aguardar o retorno de uma Promise.
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana7/segunda/exercicios-semana/ex9.html' },
                    target: "_blank",
                },
                {
                    title: '[SP07] - Ex 10 - Promises - fetch, async / await',
                    description: `Utilizando async / await, crie uma função que faça uma requisição HTTP com a função fetch no endereço https://swapi.dev/api/films/ e, usando um forEach, imprime no console o nome de cada um dos filmes.

                    Dica: a lista de filmes é retornada dentro de uma propriedade da resposta chamada “results”, e cada objeto do filme possui uma propriedade chamada “title” ( para cada filme em “results”, imprima filme.title …)
                    `,
                    done: true,
                    url: { pathname: 'https://meirelesdev.github.io/devinhouse/semana7/segunda/exercicios-semana/ex10.html' },
                    target: "_blank",
                }
            ],
            conteudo: [
                'Execução síncrona x assíncrona',
                'Web browser features (recursos do navegador)',
                'Call stack (pilha de execução) e Callback queue (fila de callback)',
                'Definição de Promise',
                'Callback hell',
                'Métodos.then() e.catch()',
                'Métodos de classe - Promise.all, Promise.allSettled',
                'Fetch',
                'Revisão de Promises',
                'Sintaxe do async / await',
                'Fetch',
                'Destructuring',
                'Operador rest - (...rest)',
                'Operador spread - { ...objeto } e [ ... array ]'
            ],
            dias: {
                segunda: {
                    exercicios: false,
                    conteudo: [
                        'Execução síncrona x assíncrona',
                        'Web browser features (recursos do navegador)',
                        'Call stack (pilha de execução) e Callback queue (fila de callback)'
                    ]
                },
                terca: {
                    exercicios: false,
                    conteudo: [
                        'Definição de Promise',
                        'Callback hell',
                        'Métodos.then() e.catch()',
                        'Métodos de classe - Promise.all, Promise.allSettled',
                        'Fetch'
                    ]
                },
                quarta: {
                    exercicios: false,
                    conteudo: [
                        'Revisão de Promises',
                        'Sintaxe do async / await',
                        'Fetch'
                    ]
                },
                quinta: {
                    exercicios: false,
                    conteudo: [
                        'Destructuring',
                        'Operador rest - (...rest)',
                        'Operador spread - { ...objeto } e [ ... array ]'
                    ]
                },
                sexta: {
                    exercicios: false,
                    conteudo: ['Tira duvidas']
                },
            }
        },
        semana8: {
            exercicios: [
                {
                    title: '[SP08] - Ex 1 - Componentes',
                    description: 'O que são componentes na tecnologia ReactJs?',
                    done: true,
                    url: ''
                },
                {
                    title: '[SP08] - Ex 2 - Props',
                    description: 'O que são as props de um componente no ReactJs? Cite um exemplo de declaração de componente com suas props.',
                    done: true,
                    url: ''
                },
                {
                    title: '[SP08] - Ex 3 - Renderização condicional',
                    description: 'Do que se trata a renderização condicional? Cite um exemplo de componente renderizado condicionalmente?',
                    done: true,
                    url: ''
                },
                {
                    title: '[SP08] - Ex 4 - Componente <Button />',
                    description: 'Crie um componente de botão com as props background (Cor de fundo do botão) e title (Texto do botão).',
                    done: true,
                    url: ''
                },
                {
                    title: '[SP08] - Ex 5 - Componente de Lista de contatos',
                    description: 'Crie um componente de lista de contatos. Cada contato deve conter uma props photo, name e description.',
                    done: true,
                    url: ''
                },
                {
                    title: '[SP08] - Ex 6 - Componente de Post de rede social',
                    description: 'Identifique as quantas e quais são as props do componente abaixo. Logo após, crie um componente Post passando todas as props identificadas.',
                    done: true,
                    url: ''
                },
                {
                    title: '[SP08] - Ex 7 - Componente de Produto',
                    description: 'Crie um componente chamado Produto. Cada produto contém as props photo, name e price.',
                    done: false,
                    url: ''
                },
                {
                    title: '[SP08] - Ex 8 - Meu próprio componente',
                    description: 'Crie o seu próprio componente contendo props e renderização condicional. Seja Criativo!',
                    done: false,
                    url: ''
                },
                {
                    title: '[SP08] - Ex 9 - Componente de Tabela',
                    description: 'Crie um componente de Tabela contendo as props title, description, columns e data.',
                    done: false,
                    url: ''
                },
                {
                    title: '[SP08] - Ex 10 - Componente de Pokédex',
                    description: 'Crie um componente de lista de pokémon. Cada item deve conter o nome do pokémon, o id do pokémon, sua foto e seus tipos(s). Use flex-box para o alinhamento dos itens. Seja criativo!',
                    done: false,
                    url: ''
                }
            ],
            conteudo: [
                "O que é React ?",
                "Components",
                "Iniciando o Projeto - Geometrizando",
                "Conferindo o ambiente de Desenvolvimento",
                "Componentes e props",
                "Continuando com Geometrizando",
                "Revisão do projeto Geometrizando",
                "PropTypes",
                "Aplicando propTypes",
                "Projeto Pokemon"
            ],
            dias: {
                segunda: {
                    exercicios: false,
                    conteudo: []
                },
                terca: {
                    exercicios: false,
                    conteudo: []
                },
                quarta: {
                    exercicios: false,
                    conteudo: ["O que é React ?", "Componentes", "Iniciando o Projeto - Geometrizando"]
                },
                quinta: {
                    exercicios: false,
                    conteudo: ["Componentes e props", "Continuando com - Geometrizando."]
                },
                sexta: {
                    exercicios: false,
                    conteudo: ["Revisão do projetos Geometrizando", "PropTypes", "Aplicando propTypes"]
                },
                sabado: {
                    exercicios: false,
                    conteudo: ["Tira duvidas"]
                }
            }
        },
        semana9: {
            exercicios: [],
            conteudo: [
                "Estado e setState",
                "Componentes funcionais",
                "Introdução à hooks: useState",
                "Hook: useEffect",
                "Hook: useRef",
                "Usar hooks no sistema Pokemon",
                "Transformar o Housebook em app React",
                "Eventos React x DOM",
                "Components controlados X não Controlados"
            ],
            dias: {
                segunda: {
                    exercicios: false,
                    conteudo: [
                        'Estado e setState',
                        'Componentes funcionais',
                        'Introdução à hooks: useState( )'
                    ]
                },
                terca: {
                    exercicios: false,
                    conteudo: ['Hook useEffect( )', 'Hook useRef( )']
                },
                quarta: {
                    exercicios: false,
                    conteudo: ['Usar hooks no sistema Pokemon', 'Transformar o Housebook em app React']
                },
                quinta: {
                    exercicios: false,
                    conteudo: ['Eventos React x DOM', 'Componentes controlados X não controlados']
                },
                sexta: {
                    exercicios: false,
                    conteudo: ['Tira duvidas']
                },
            }
        },
        semana10: {
            exercicios: [],
            conteudo: [
                "Como funcionam as rotas de navegação com React",
                "Utilizando a lib React-Router-Dom",
                "Criando nossas próprias rotas",
                "Elaborando nossa própria rota customizada",
                "Entendendo como funciona o UseHistory, UseParams, UseLocation",
                "Outros componentes que utilizaremos",
                "Desafio, criar um projeto que utilize todos estes conceitos",
                "Revisando a aula anterior sobre rotas da aplicação",
                "Conceitos de estados em outras telas",
                "Como funciona o useContext",
                "Aprendendo na prática utilizando o useContext",
                "Consumindo api e combinando com useContext",
                "Desafio, criar um projeto que utilize todos estes conceitos",
                "Revisando a aula anterior sobre useContext",
                "Como funciona o useReducer",
                "Aprendendo na prática utilizando o useReducer criando uma aplicação darkMode simples",
                "CSS-in-JS",
                "Styled components"
            ],
            dias: {
                segunda: {
                    exercicios: true,
                    conteudo: [
                        'Como funcionam as rotas de navegação com React',
                        'Utilizando a lib React-Router-Dom', 'Criando nossas próprias rotas',
                        'Elaborando nossa própria rota customizada',
                        'Entendendo como funciona o UseHistory, UseParams, UseLocation',
                        'Outros componentes que utilizaremos',
                        'Desafio, criar um projeto que utilize todos estes conceitos'
                    ]
                },
                terca: {
                    exercicios: false,
                    conteudo: [
                        'Revisando a aula anterior sobre rotas da aplicação',
                        'Conceitos de estados em outras telas',
                        'Como funciona o useContext',
                        'Aprendendo na prática utilizando o useContext',
                        'Consumindo api e combinando com useContext'
                    ]
                },
                quarta: {
                    exercicios: false,
                    conteudo: [
                        'Revisando a aula anterior sobre useContext',
                        'Como funciona o useReducer',
                        'Aprendendo na prática utilizando o useReducer criando uma aplicação darkMode simples'
                    ]
                },
                quinta: {
                    exercicios: false,
                    conteudo: [
                        'CSS-in-JS',
                        'Styled components'
                    ]
                },
                sexta: {
                    exercicios: false,
                    conteudo: ['Tira duvidas']
                },
            }
        },
        semana11: {
            exercicios: [
                {
                    title: '[M1S11] - Ex 1 - Formik',
                    description: `
                    Crie um formulário para cadastro de um cliente, com os seguintes campos, todos gerenciados pelo Formik:
                    nome, cpf, data de nascimento, telefone fixo, telefone celular.
                    
                    Use o método que preferir (componente Field, função setFieldValue, etc) para gerenciar os valores.

                    O formulário deve ter um botão de submeter que, quando clicado, mostra no console os dados cadastrados (console.log)
                    `,
                    done: false,
                    url: ''
                },
                {
                    title: '[M1S11] - Ex 2 - Formik',
                    description: `No formulário do exercício anterior, crie novos campos para cadastro do endereço do cliente: rua, número, complemento, bairro, cidade e estado.

                    Todos esses dados precisam ser adicionados à uma propriedade “endereço” no estado do Formik.
                    `,
                    done: false,
                    url: ''
                },
                {
                    title: '[M1S11] - Ex 3 - Classes e ciclos de vida',
                    description: `Sabendo que os principais métodos de ciclos de vida de uma classe são:
                    - componentDidMount
                    - componentDidUpdate
                    - componentWillUnmount.
                    Cite em quais fases do ciclo de vida cada um desses métodos é chamado e dê um exemplo de em qual situação cada um deles pode ser utilizado.`,
                    done: false,
                    url: ''
                },
                {
                    title: '[M1S11] - Ex 4 - Classes e ciclos de vida',
                    description: `Converta o componente funcional abaixo em componente de classe utilizando os métodos de ciclo de vida.

                    Obs: os métodos são fictícios. Não se preocupe com o funcionamento, apenas com a reescrita do código.
                    
                    export const MeuComponente = ( ) => { 
                        const [ nome, setNome ] = useState( “” ) 
                    
                        useEffect ( (  ) => { 
                            fetchNome(  ).then( result => setNome( result ) );
                    
                            return ( ) => { 
                                notifyUser( “ O componente foi desmontado. ” )
                    }
                     },  [  ] )
                    
                    useEffect ( ( ) => { 
                        console.log( “ O nome foi alterado. “ ) 
                     } , [ nome ]  )
                    
                        return (
                            <div>
                                <p> Olá, {nome}! </p>
                                <button onClick={ ( ) => { setNome( “desconhecido” ) }  } > Mudar	<button>
                            </div>
                     )
                    }`,
                    done: false,
                    url: ''
                },
                {
                    title: '[M1S11] - Ex 5 - Classes e ciclos de vida',
                    description: `
                    Converta o componente de classe abaixo em um componente funcional utilizando os hooks. 

                    Não se preocupe em implementar os componentes, pois o exercício é apenas para exercitar a refatoração.
                    Mas caso queira verificar o funcionamento, este componente faz parte do projeto desenvolvido em aula.
                    Segue link do componente no repositório do projeto:
                    https://github.com/mikansc/devinhouse-formik/blob/main/src/pages/ListaUsuarios/ListaUsuarios.jsx
                    
                    export function ListaUsuarios() {
                      const [usuarios, setUsuarios] = useState([]);
                    
                      useEffect(() => {
                        getAllUsers().then(setUsuarios);
                      }, []);
                    
                      return (
                        <PageDefault>
                          <Container>
                            <Paper>
                              <h2>Todos os usuários</h2>
                              <StyledUserContainer>
                                {usuarios.length === 0 ? (
                                  <p> Nenhum usuário encontrado. </p>
                                ) : (
                                  usuarios.map((usuario) => <UserCard key={usuario.id} usuario={usuario} />)
                                )}
                              </StyledUserContainer>
                            </Paper>
                          </Container>
                        </PageDefault>
                      );
                    }
                    `,
                    done: false,
                    url: ''
                },
                {
                    title: '[M1S11] - Ex 6 - Classes, error boundary',
                    description: `
                    O componente ErrorBoundary é um tipo de componente que ajuda a isolarmos os erros que eventualmente possam acontecer em nossa aplicação.
                    Ele só pode ser aplicado por meio de componentes de classe.

                    Crie um componente ErrorBoundary usando os métodos vistos em aula.
                    `,
                    done: false,
                    url: ''
                },
                {
                    title: '[M1S11] - Ex 7 - Composição, prop-drilling, arquitetura',
                    description: `
                    Utilizando a técnica de composição de componente, crie um componente Card que seja formado por um CardHeader, CardContent e CardFooter.
                    Use a criatividade para implementar este card em um projeto React!`,
                    done: false,
                    url: ''
                },
                {
                    title: '[M1S11] - Ex 8 - Composição, prop-drilling, arquitetura',
                    description: `
                    Quando organizamos nossos arquivos, é boa prática deixarmos componentes bem nomeados e dentro de diretórios em que faça sentido eles estarem.
                    Não existe uma maneira correta, e o padrão a ser seguido geralmente depende do que o time acordou na concepção do projeto.

                    Dada a lista de componentes abaixo, como você organizaria estes componentes em pastas? 
                    Veja o nome dos componentes para imaginar uma estrutura de pastas que faça sentido.
                    
                    - Botao.js
                    - InputTexto.js
                    - Form.js
                    - Container.js
                    - InputSeletor.js
                    - CardProduto.js
                    - CardProdutoHeader.js
                    - CardProdutoBody.js
                    - GlobalStyles.js
                    - use-autenticador.js
                    - use-fetch-produtos.js
                    - produtos-context.js
                    - routes.js
                    - logotipo.png
                    - PaginaHome
                    - PaginaListaUsuarios
                    - PaginaListaProdutos
                    `,
                    done: false,
                    url: ''
                },
                {
                    title: '[M1S11] - Ex 9 - Debugging, useMemo, useCallback, memo',
                    description: `
                    O React possui dois hooks para memoização de componentes (salvamento desse componente em uma espécie de “cache” virtual). 
                    Esses hooks nos ajudam a melhorar a performance em ocasiões específicas, onde a re-renderização de um componente pode se tornar um processo lento.

                    Cite a diferença entre o useCallback e o useMemo, e como poderíamos usar ambos para melhorar a performance de um componente com processamento lento.
                    `,
                    done: false,
                    url: ''
                },
                {
                    title: '[M1S11] - Ex 10 - React Developer Tools',
                    description: `Vamos treinar a utilização do React Developer Tools.

                    Execute no aplicação MeuCadastro.com e navegue até a página “Novo usuário”.
                    
                    Utilizando a ferramenta Developer Tools e a aba Components, encontre na árvore de componentes o componente Formik.
                    
                    a) Quantos componentes são renderizados a partir do Formik (incluindo ele) até o TextInput com a prop “label” igual a “Apelido:” ?
                    
                    b) Selecionando o Formik, qual o nome do componente responsável por renderizar o Formik na listagem “rendered by”?
                    
                    c) Qual o nome do componente que renderiza todos os outros componentes da aplicação, indicado na listagem “rendered by”? 
                    
                    d) Na tela “Tecnologias”, quais são as props passadas para o componente ListaTecnologias? Quantos hooks este componente tem?
                    
                    e) O TechCard com a key = 1 possui uma propriedade chamada “tecnologia”, que recebe um objeto. Qual o valor da propriedade “título” dentro desse objeto?
                    `,
                    done: false,
                    url: ''
                }
            ],
            conteudo: [
                "createGlobalStyle",
                "ThemeProvider",
                "Gerenciamento de formulários",
                "Formik - gerenciamento de formulários",
                "Yup - validação de formulários",
                "Submissão de formulário com POST",
                "Material Complementar",
            ],
            dias: {
                segunda: {
                    exercicios: true,
                    conteudo: [
                        "createGlobalStyle",
                        "ThemeProvider",
                        "Gerenciamento de formulários",
                        "Formik - gerenciamento de formulários",
                        "Yup - validação de formulários",
                        "Submissão de formulário com POST",
                        "Material Complementar",
                        "Ciclos de vida",
                        "Métodos de ciclo de vida em componentes de classe",
                        "Material Complementar",
                    ]
                },
                terca: {
                    exercicios: false,
                    conteudo: []
                },
                quarta: {
                    exercicios: false,
                    conteudo: [
                        "Ciclos de vida",
                        "Métodos de ciclo de vida em componentes de classe"
                    ]
                },
                quinta: {
                    exercicios: false,
                    conteudo: [
                        "Composição de componentes",
                        "Prop drilling",
                        "Organização de projetos React"
                    ]
                },
                sexta: {
                    exercicios: false,
                    conteudo: []
                },
            }
        },
        semana12: {
            exercicios: [],
            conteudo: [],
            dias: {
                segunda: {
                    exercicios: true,
                    conteudo: []
                },
                terca: {
                    exercicios: false,
                    conteudo: []
                },
                quarta: {
                    exercicios: false,
                    conteudo: []
                },
                quinta: {
                    exercicios: false,
                    conteudo: []
                },
                sexta: {
                    exercicios: false,
                    conteudo: []
                },
            }
        }
    }
}