import express from "express";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import path from "path"

const PORT = 8080;
const HOST = "localhost";
const server = express();


server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/public", express.static(path.join(path.basename("src"),"public")));

server.use("/api/products", productsRouter);
server.use("/api/carts", cartsRouter);


server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});