import corsOptions from "../config/cors.config";
import cors from "cors";

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;