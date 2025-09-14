import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class FiltroExcecaoGlobal implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void;
}
export declare class ErroInterno extends HttpException {
    constructor(mensagem?: string);
}
