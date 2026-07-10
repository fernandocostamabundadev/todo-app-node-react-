import {z} from 'zod';

export const validate = (schema) => {
  return (req, res, next) => {
    try{
      const validated = schema.parse({
        body:req.body,
        params: req.params,
        query: req.query
      })

      req.body = validated.body || req.body;
      req.params = validated.params || req.params;
      req.query = validated.query || req.query;

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
