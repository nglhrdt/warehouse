import express from "express";
import v1Routes from "./v1/routes/index.ts";

async function main() {
  try {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
      res.send("Hello from v1");
    });

    app.use("/api/v1", v1Routes);

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (e) {
    console.error(e);
  }
}

main();
