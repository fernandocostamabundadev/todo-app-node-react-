import { z } from 'zod';

export const validate = (schema) => {
  return (req, res, next) => {
    try {
      const validated = schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      // Body é editável
      if (validated.body) {
        req.body = validated.body;
      }

      // Params é editável
      if (validated.params) {
        req.params = validated.params;
      }

      // Query NÃO é editável - guardamos em outro lugar
      if (validated.query) {
        req.validatedQuery = validated.query;
      }

      next();
    } catch (error) {
      // ✅ VERIFICA SE error É UMA INSTÂNCIA DE ZodError
      if (error instanceof z.ZodError) {
        // ✅ VERIFICA SE error.errors EXISTE
        const messages = error.errors?.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        })) || [{ field: 'unknown', message: 'Erro de validação' }];

        return res.status(400).json({
          status: 'error',
          message: 'Erro de validação',
          errors: messages,
        });
      }

      // Se não for erro do Zod, passa para o próximo middleware
      next(error);
    }
  };
};
