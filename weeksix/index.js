const express = require('express');
const app = express();
const product = require('./models/product');
// const {v4:uuidv4} = require ('uuid'); 

const PORT = 8100; //change port if it gives EADDRINUSE error
app.use(express.json());
app.use(express.urlencoded({extended: true}));//to return string

// read all records
app.get('/product', (req, res) =>{
    res.json(product);
});

// create new record
app.post('/product/create', (req, res) => {
    console.log (req.body)
let newProduct = {
    // id: uuidv4(),
    id: product.length + 1,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
}
list.push(newProduct);
res.json(product)
 
})

app.put("/product/:id", (req, res) => {
    const { id } = req.params;
    // find product by id, return 404 if not found
    product = product.find((product) => product.id === Number(id));
    if (!product) {
      return res
        .status(404)
        .json({ success: false, 
            msg: `Product with id ${id} does not exist.` });
    }
    
    const index = product.indexOf(product);
    const updatedProduct = { ...product, ...req.body };
  
    product[index] = updatedProduct;
    return res.status(200).json({
      success: true,
      msg: `Product ${id} has been sucessfully added.`,
      data: product,
    });
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
