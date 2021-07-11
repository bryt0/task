const express = require('express');
const app = express();
const product = require('./models/product');

const PORT = 8100; //change port if it gives EADDRINUSE error
app.use(express.json());

// read all records
app.get('/product', (req, res) =>{
    res.json(product);
});

// create new record
app.post('/product', (req, res) => {
    const { name, desc , image , price } = req.body
    if (!name || !desc || !image || !price) {
      return  res
        .status(400)
        .json({ success: false, msg: 'please input product details' })
    }

    const newProduct = { id : product.length + 1  , name: name, desc: desc, image: image, price: price}
    product.push(newProduct);
    res
    .status(200)
    .json({ success: true, data: product})  
})

// update record
app.put('/product/:id', (req, res) =>{
const productID = Number(req.params.id);
const product = product.find((product) => product.id === productID);
const index = product.indexOf(product);

if (!product) {
    res
    .status(500)
    .send("product not found");
}else {
    const updatedProduct = {...product, ...req.body}
    product[index] = updatedProduct;
    res.json(product)
};
});

// delete record
app.delete('/product/:id',(req,res) =>{
    let productId = Number(req.params.id);
    let deleteProduct = product.filter((product) => product.id !== productId);
    if(!deleteProduct){
        res
        .status(404)
        .send(`There is no Product with id of ${productId} `);
    }else{
        product = deleteProduct;
        res.json(product);
    }
});

app.get('*', (req, res)=>{

    res.send("invalid address");
});

app.listen(PORT, () => console.log(`Server is running on http://127.0.0.1:${PORT}`))