# Gerenciador do Blog Crosslife Suzano
O gerenciador do blog da Crosslife é um projeto que será desenvolvido para web, com o intuito de servir como uma plataforma para fazer o gerenciamento completo das notícias e perfil do autor, tambem vai ser utilizado para o trabalho de conclusão de curso da faculdade IMPACTA.

## Funcionalidades
Todas as funcionalidades foram desenvolvidas para tornar a vida do usuário o mais simples possível, elas são:
* Criar e gerenciar notícia (CRUD).
* Pesquisar e filtar notícia.
* Mudar dados de perfil do autor.
* Mudar tema entre escuro e claro.

## Tecnologias
Foram utilizados as seguintes tecnologias para o desenvolvimento:
* React
* React router dom
* Date fns

## Como executar o projeto
Seguir o passo a passo para conseguir rodar a aplicação na sua máquina

#### 1. Executando a aplicação com npm
```javascript
// Clonando repositório:
git clone https://github.com/caio1902araujo/crosslife-blog-manager.git

// Entrando no diretório:
cd crosslife-blog

// Instalando dependências:
npm install package.json

// Rodar a aplicação:
npm run start
```

#### 2. Executando aplicação com yarn
```javascript
// Clonando repositório:
git clone https://github.com/caio1902araujo/crosslife-blog-manager.git

// Entrando no diretório:
cd crosslife-blog

// Instalando dependências:
yarn

// Rodar as migrations:
yarn typeorm migration:run

// Rodar a aplicação:
yarn start
```

## Layout
O layout foi feito inteiramente no Figma

![layout](/images/layout.jpg)
