import express from "express";
import inventoryRouter from "./router/inventoryRouter.js";

const app = express();

app.use(express.json());

app.use("/inventory", inventoryRouter);

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
