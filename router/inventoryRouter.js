import express from "express";
import {
  createDataService,
  deleteDataService,
  getDataByIdService,
  getDataService,
  updateDataService,
} from "../services/inventoryServices.js";

const inventoryRouter = express.Router();

inventoryRouter.get("/", getDataService);
inventoryRouter.post("/", createDataService);
inventoryRouter.put("/:id", updateDataService);
inventoryRouter.delete("/:id", deleteDataService);
inventoryRouter.get("/:id", getDataByIdService);

export default inventoryRouter;
