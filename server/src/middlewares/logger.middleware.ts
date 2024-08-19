import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger(
    `${req.method} ${req.originalUrl}`,
    "server/middlewares/logger.middleware.ts"
  );
  next();
};

export default loggerMiddleware;
