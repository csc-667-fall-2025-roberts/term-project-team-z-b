import { NextFunction, Request, Response } from "express"



const requestTimestampMiddleware = (_request: Request, _response: Response, next: NextFunction) => {
    console.log(`Request recieved at ${Date.now.toLocaleString()}`);

    next();
}

export { requestTimestampMiddleware }