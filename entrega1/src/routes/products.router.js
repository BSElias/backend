import { Router } from "express";

const router = Router();
const products = [];


router.get("/",(req, res)=> {
    res.status(200).send({state: "success", data: products});
});

router.post("/",(req, res)=> {
    const {name, surname} = req.body;
    const product = {name, surname};
    users.push(product);

    res.status(201).send({state: "success", data: product});
});

export default router;