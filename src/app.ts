import express from "express";
import cors from "cors";
import logger from "morgan";

import routes from "./routes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
