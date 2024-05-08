import express from "express";
import { getCart} from "../controller/cart.controller.js";

const router = express.Router();

router.post("/", getCart);

export default router;