import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo List API',
      version: '1.0.0',
      description: 'API RESTful para gerenciamento de tarefas (To-Do List) com PostgreSQL, Prisma ORM e arquitetura em camadas.',
      contact: {
        name: 'Fernando Costa Mabunda',
        email: 'f0083357@email.com',
      },
      license: {
        name: 'MIT',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Servidor de desenvolvimento',
      },
    ],
    components: {
      schemas: {
        Todo: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            title: { type: 'string', example: 'Estudar Node.js' },
            completed: { type: 'boolean', example: false },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        CreateTodoInput: {
          type: 'object',
          required: ['title'],
          properties: {
            title: { type: 'string', example: 'Estudar Node.js' },
            completed: { type: 'boolean', example: false },
          },
        },
        UpdateTodoInput: {
          type: 'object',
          properties: {
            title: { type: 'string', example: 'Estudar Node.js atualizado' },
            completed: { type: 'boolean', example: true },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            status: { type: 'string', example: 'error' },
            message: { type: 'string', example: 'Erro de validação' },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['./src/router/*.js'],
};

export const swaggerSpec = swaggerJsdoc(options);
