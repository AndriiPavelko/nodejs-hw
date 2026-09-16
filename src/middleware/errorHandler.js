import  { isHttpError } from 'http-errors';





export const errorHandler = (err, req, res, next) => {

    if (isHttpError(err)){
      return res.status(err.status).json({
         message: err.message, });
    }


   const isProd = process.env.NODE_ENV === "production";
   const status = err.name === 'ValidationError' ? 400 : 500;
   res.status(status).json({
     message: isProd ? err.message : err.stack, });
 };
