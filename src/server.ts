import express from "express";
import bodyParser from "body-parser";

const app: express.Application = express();
const port = 7861
const address = `0.0.0.0:${port}`

app.use(bodyParser.json());

app.get("/", (req: express.Request, res: express.Response): void => {
  res.send("/");
});

app.listen(port, function () {
  console.log(`Server listening on ${address}...`);
});

export default app;
