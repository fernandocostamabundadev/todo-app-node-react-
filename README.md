# Todo App - Full Stack Application

Uma aplicação completa de lista de tarefas (To-Do App) com **Node.js/Express** no backend e **React/Vite** no frontend.

## Tecnologias

### Backend

- Node.js + Express
- Zod (validação)
- Swagger (documentação)
- CORS

### Frontend

- React 19 + Vite
- Tailwind CSS
- Axios

## ✨ Funcionalidades

- Criar, listar, atualizar e deletar tarefas
- Alternar status (concluído/pendente)
- Validação com Zod
- Documentação Swagger
- Interface responsiva

## 📁 Estrutura do Projeto

## Estrutura do projeto

`
 todo_list/
 ├── frontend/
 │   ├── index.html
 │   ├── package.json
 │   ├── .gitignore
 │   ├── eslint.config.js
 │   ├── postcss.config.js
 │   ├── tailwind.config.js
 │   ├── vite.config.js
 │   └── src/
 │       ├── components/
 |       |      └── TodoItem.jsx
 │       ├── styles/
 |       |      └── index.css
 │       ├── App.jsx
 │       └── main.jsx
 ├── backend/
 │   ├── package.json
 │   ├── .env.example
 │   ├── server.js
 │   └── src/
 │       ├──config/
 |       |      └── swagger.config.js
 │       ├──controllers/
 |       |      └── todo.controller.js
 │       ├──middlewares/
 |       |      └── validation.middlewares.js
 │       ├──router/
 │       │      ├── swagger.routes.js
 |       |      └── todo.routes.js
 │       ├──services/
 |       |      └── todo.service.js
 │       ├──validations/
 |       |      └── todo.validation.js
 │       └── app.js
 └── README.md
`

## Como rodar localmente

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

O backend roda em `http://localhost:3001`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

O frontend roda em `http://localhost:5173`.

## Endpoints disponíveis

### Tarefas

- `GET /api/todo` - listar tarefas do usuário
- `POST /api/todo` - criar nova tarefa
- `PUT /api/todo/:id` - atualizar tarefa
- `PATCH /api/todo/:id/toggle` - alternar status da tarefa
- `DELETE /api/todo/:id` - deletar tarefa

## Documentação Swagger

url: http://localhost:3001/api-docs

## Deploy

### Backend (Render)

Crie uma conta no Render
Conecte seu repositório
Configure:
  Root Directory: backend
  Build Command: npm install
  Start Command: npm start

### Frontend (Vercel)

Crie uma conta no Vercel
Conecte seu repositório
Configure:
  Root Directory: frontend
  Framework: Vite
  Build Command: npm run build

## Observações importantes

- O backend está usando armazenamento em memória, portanto dados são perdidos ao reiniciar o servidor.
- Ainda não há funcionalidades de categorias, tags, métricas ou persistência em PostgreSQL.

## Próximos passos recomendados

- Adicionar PostgreSQL e Prisma para persistência de dados
- Criar páginas de categorias, tags e estatísticas
- Adicionar validação de formulários mais robusta
- Melhorar o design visual e tornar responsivo

## Comandos úteis

- `npm run dev` - inicia servidor de desenvolvimento
- `npm run build` - compila o frontend para produção

## Licença

MIT

## 👨‍💻 Autor

- Fernando Costa Mabunda (FC.Mabunda)

- 📧 Email: f0083357@email.com
- 💼 GitHub: https://github.com/fernandocostamabundadev
- 🔗 LinkedIn: https://www.linkedin.com/in/fernando-mabunda/

## Agradecimentos

-Node.js
- React
- Vite
- Tailwind CSS
- Swagger
