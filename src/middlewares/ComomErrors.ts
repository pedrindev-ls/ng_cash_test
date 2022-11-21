import { NextFunction, Request, Response } from 'express';
import ErrorInterface from '../interfaces/errorInterface';

export default class CommomErrors {
  takeError = (err: ErrorInterface, _req: Request, res: Response, _next: NextFunction) => {
    if (err.status) return res.status(err.status).json({ message: err.message });

    res.status(500).json({ message: err.message });
  };
}