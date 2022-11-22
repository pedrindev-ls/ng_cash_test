# Instruções para funcionar a API
  Execute o comando a baixo para ligar o <span><strong>docker compose</strong></span>
  - docker-compose up -d
  
  Depois um comando para <span><strong>entrar no terminal do node</strong></span>
  - docker exec -it ng_cash

  Agora <span><strong>instale as dependencias</strong></span> da aplicação
  - npm install

  Em seguida, rode 2 comandos relacionados ao banco de dados
  - <span><strong>Criar</strong></span>: npx sequelize-cli db:create
  - <span><strong>Relacionar e Povoar</strong></span>: npx sequelize-cli db:migrate && npx sequelize db:seed:all

  Agora o último comando para <span><strong>ligar a API</strong></span>
  - npm run dev

# Intruções de requisições para a API

  <span><strong>Rota de criação de usuário</strong></span>
  - url: http://localhost:3000/user
  - método: POST
  - informações:
    - Body(JSON): {
      - username: string com pelo menos 3 digitos
      - password: string com pelo menos 1 número, 1 letra maiúscula e no minimo 8 caracteres
    }
  
  <span><strong>Rota de Login</strong></span>
  - url: http://localhost:3000/login
  - método: POST
  - informações:
    - Body(JSON): {
      - username: pode ser o username que você criou antes
      - password: a exata mesma senha que você criou
    }
  
  - A função vai retornar um token correspondente ao seu login, copie e salve em algum lugar porque vai precisar para as próximas rotas

  <span><strong>Rota de requisição do balance</strong></span>
  - url: http://localhost:3000/account
  - método: GET
  - informações:
    - headers: 
      - Authorization: cole o token da rota de login aqui

  <span><strong>Rota de requisição das transações</strong></span>
  - url: http://localhost:3000/transactions
  - método: GET
  - informações:
    - headers: 
      - Authorization: cole o token da rota de login aqui

  <span><strong>Rota de requisição das transações em que o usuário recebeu dinheiro</strong></span>
  - url: http://localhost:3000/transactions/credited
  - método: GET
  - informações:
    - headers: 
      - Authorization: cole o token da rota de login aqui

  <span><strong>Rota de requisição das transações em que o usuário enviou dinheiro</strong></span>
  - url: http://localhost:3000/transactions/debited
  - método: GET
  - informações:
    - headers: 
      - Authorization: cole o token da rota de login aqui
