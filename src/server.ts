import express from "express";
import bodyParser from "body-parser";

const app: express.Application = express();
const address = "0.0.0.0:3000";

app.use(bodyParser.json());

app.get("/", (req: express.Request, res: express.Response): void => {
  res.send("/");
});

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
