import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class FiltroExcecaoGlobal implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let mensagem = 'Erro interno do servidor';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const resposta = exception.getResponse() as string | { message?: string };

      if (typeof resposta === 'string') {
        mensagem = resposta;
      } else if (typeof resposta === 'object' && resposta.message) {
        mensagem = Array.isArray(resposta.message)
          ? resposta.message.join(', ')
          : resposta.message;
      } else {
        mensagem = exception.message;
      }
    }

    response.status(status).json({
      status,
      mensagem,
      timestamp: new Date().toISOString(),
    });
  }
}

export class ErroInterno extends HttpException {
  constructor(mensagem = 'Erro interno do servidor') {
    super(mensagem, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}