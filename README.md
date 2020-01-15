# Omnistack 10
## Projeto da semana Omnistack 10 da Rocketseat
### Configurações do projeto
Sistema Operacional Utilizado: 
- Windows 10  
  
IDE/Editor de código utilizado:
- Visual Studio Code  
  
Versão NodeJS utilizada:
- Versão 12.14.1 LTS  

Banco de dados utilizado:
- MongoDB

Instalado pelo package manager:
- Gerenciador de pacotes chocolatey  
  
Instalando o NodeJS:

    choco install nodejs-lts  

Instalando o yarn:

    choco install yarn
    
Verificação de versões:
    
    node -v
    npm -v
    yarn -v  

Extensões utilizadas no VSCode:
- Dracula Official
- Material Icon Theme

---
Importações:

Pelo powershell, na pasta backend:
`yarn init -v`
`yarn add express` servidor
`yarn add nodemon -D` servidor automatico
`yarn add mongoose` banco
`yarn add axios` chamar outras apis

Execução localhost:
`node index.js`
`yarn nodemon index.js`
`yarn dev`

Software para testar rotas: Insomnia

Métodos HTTP:
- GET
- POST
- PUT
- DELETE

Tipos de parâmetros:
- Query params: listagem, incorporados na URL feito pelo `request.query`
- Route params: alteração/remoção `/users/:id` feitpo pelo `request.params`
- Body: para criação, pelo JSON feito pelo`request.body`

Pare entender requisições JSON: `app.use(express.json());`

Conectar a um banco de dados mongodb:
- `mongoose.connect('connection string do banco')`