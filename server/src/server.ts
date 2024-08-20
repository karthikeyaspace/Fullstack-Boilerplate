import express from "express";
import cors, { CorsOptions } from "cors";
import config from "./config/env";
import corsOptions from "./config/cors.config";
import * as approutes from "./routes";

// databases
// mongo connection
// firebase connection
// supabase connection

const app = express();
const port = config.PORT || 3001;
app.use(express.json());

app.use(cors(corsOptions));

app.use("/user", approutes.user);
app.use("/admin", approutes.admin);
app.use("/auth", approutes.auth);
app.use("/api", approutes.api);
app.use("/ai", approutes.ai);

app.get("/", (req, res) => {
  res.send("Express server - https://github.com/karthikeyaspace");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
