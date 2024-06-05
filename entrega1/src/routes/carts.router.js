import { Router } from "express";

const router = Router();
const carts = [];

router.get("/",(req, res)=> {
    res.status(200).send({state: "success", data: carts});
});

router.post("/",(req, res)=> {
    const {name, specie} = req.body;
    const cart = {name, specie};
    pets.push(cart);

    res.status(201).send({state: "success", data: cart});
});

export default router;