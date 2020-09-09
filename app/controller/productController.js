const Product=require('../model/product')


// Get Products
module.exports.list= (req, res) => { 
  const products=[]  
  Product.find()
 .then(products => {
    res.status(200).json(products);
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: 'An error occured'});
  });
};


// Get product with ID
module.exports.show=(req, res, next) => {
    const id=req.params.id
  Product.findById(id)
 .then(products => {
    res.status(200).json(products);
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: 'An error occured'});
  });
};


// Add new product
module.exports.create=(req, res) => {
const body=req.body
    const product=new Product(body)
    product.save()
    .then((product)=>{
        res.json(product)
    })
    .catch((err)=>{
        res.json(err)
    })
};


// Edit existing product
module.exports.update=(req, res) => {
    const id=req.params.id
    const body=req.body
  Product.findByIdAndUpdate(id,body,{new:true,runValidators:true})
  .then(product => { 
    res.status(201).json({ message: 'Product Updated' });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: 'An error occured'});
  });
};


// Delete a product
module.exports.destroy=(req, res) => {
    const id=req.params.id
  Product.findByIdAndDelete(id)
  .then(result => { 
    res.status(200).json({ message: 'Product Deleted' });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: 'An error occured'});
  });
};

