# prog-web-com-node-atividade-3
## Exercício 3
Neste exercício, iremos criar uma loja online básica com persistência de dados. Para esse contexto, iremos utilizar a seguinte stack: nodejs, nodemon, express, handlebars, knex e sqlite.

# Passo 1
Clone o repositório abaixo e em seguida rode o comando npm install.
https://github.com/samwx/nodejs-knex
Rode o comando npm start para rodar o projeto na rota 3000. Para debugar o código no VSCode, abra o projeto e aperte F5 (habemus debug!!)

# Passo 2
Utilizando os conceitos da aula 01, crie uma rota /products/:id e liste todos os detalhes do produto clicado. Para isso, além de declarar a rota especificada, você deverá implementar o método getById no arquivo Products.js dentro da pasta store . Utilize o método where para filtrar o produto por id.

# Passo 3
Abaixo dos detalhes do produto iremos listar todas as avaliações feitas via comentário. Para isso, além de listar os comentários feitos anteriormente, crie um formulário com os campos Nome e Comentário para que seja possível adicionar novos comentários. Obs.: Neste passo, os comentários deverão ser armazenados no mongodb via mongdb atlas.

Caso você não tenha um banco no mongo atlas, entre no site https://www.mongodb.com/cloud/atlas para criar uma conta e siga os passos abaixo:

Após criar uma conta, selecione a opção Starter Clusters , conforme imagem abaixo:

No próximo passo, adicione o IP 0.0.0.0/0 ao whitelist e crie um usuário a seu critério ( evite utilizar a mesma senha para outros acessos, pois essa será pública ).
