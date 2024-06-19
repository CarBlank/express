const express = require("express");
const app = express();
const PORT = "3000";

app.use(express.json());

//Array
const products = {
  description: "Productos",
  items: [
    { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
    { id: 2, nombre: "FIFA 22 PS5", precio: 1000 },
    { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
    { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
    { id: 5, nombre: "Skin Valorant", precio: 120 },
    { id: 6, nombre: "Taza de Star Wars", precio: 220 },
  ],
};

//GET - para montrar el array en postman
app.get("/products", (req, res) => {
  res.status(200).send(products);
});
//Hola
const productsItem = products.items;
//Crear endpoint para poder crear un producto nuevo
app.post("/newProduct", (req, res) => {
  const newProduct = {
    id: productsItem.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio,
  };

  if (req.body.nombre === "" || req.body.precio === "") {
    res.status(400).send({ message: "Rellena los campos requeridos" });
  } else {
    productsItem.push(newProduct);
    res.status(201).send({ message: "Perfecto", products });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});
