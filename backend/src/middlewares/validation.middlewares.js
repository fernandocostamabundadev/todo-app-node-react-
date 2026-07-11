import {z} from 'zod';

export const validate = (schema) => {
  return (req, res, next) => {
    try{
      const validated = schema.parse({
        body:req.body,
        params: req.params,
        query: req.query
      })

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
    }catch(error){
      if(error instanceof z.ZodError){

        const messages = error.errors.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        }));

        return res.status(400).json({
          status: 'error',
          message: 'Erro de validação',
          errors: messages,
        });
      }

      next(error);
    }
  }
}
