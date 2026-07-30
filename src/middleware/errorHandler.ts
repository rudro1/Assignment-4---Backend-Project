import type { NextFunction, Request, Response } from 'express';

export function notFoundHandler(_req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    errorDetails: null
  });
}

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  const message = err instanceof Error ? err.message : 'Internal server error';

  res.status(500).json({
    success: false,
    message,
    errorDetails: err instanceof Error ? { name: err.name } : null
  });
}
