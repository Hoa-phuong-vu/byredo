import express from 'express';
import { MongoClient } from 'mongodb';
import path from 'path';


async function start() {
  const url = `mongodb+srv://vuphuonghoa:vuphuonghoa@cluster0.dd8seao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  const client = new MongoClient(url);
  
  await client.connect();
  const db = client.db('byredo-db');

  const app = express();
  app.use(express.json());

  app.use('/images', express.static(path.join(__dirname, '../assets')));

  app.use(express.static(
    path.resolve(__dirname, '../dist'),
    { maxAge: '1y', etag: false },
  ));

  app.get('/api/products', async (req, res) => {
    const products = await db.collection('products').find({}).toArray();
    res.send(products);
  });

  async function populateCartIds(ids) {
    return Promise.all(ids.map(id => db.collection('products').findOne({ id })));
  }

  async function populateFavoriteItems(ids) {
    return Promise.all(ids.map(id => db.collection('products').findOne({ id })));
  }

  app.get('/api/users/:userId/cart', async (req, res) => {
    const user = await db.collection('users').findOne({ id: req.params.userId });
    const populatedCart = await populateCartIds(user.cartItems);
    res.json(populatedCart);
  });

  app.get('/api/products/:productId', async(req, res) => {
    const productId = req.params.productId;
    const product = await db.collection('products').findOne({ id: productId });
    res.json(product);
  });

  app.post('/api/users/:userId/cart', async(req, res) => {
    const userId = req.params.userId;
    const productId = req.body.id;

    await db.collection('users').updateOne({id: userId}, {
      $addToSet: {cartItems: productId},
    });
    
    const user = await db.collection('users').findOne({ id: req.params.userId });
    const populatedCart = await populateCartIds(user.cartItems);
    res.json(populatedCart);
  });


  app.delete('/api/users/:userId/cart/:productId', async(req, res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;

    await db.collection('users').updateOne({id: userId}, {
      $pull: {cartItems: productId},
    });

    const user = await db.collection('users').findOne({ id: req.params.userId });
    const populatedCart = await populateCartIds(user.cartItems);
    res.json(populatedCart);
  });


  //favourites
  app.get('/api/users/:userId/fav', async (req, res) => {
    const user = await db.collection('users').findOne({ id: req.params.userId });
    const populatedFav = await populateFavoriteItems(user.favItems);
    res.json(populatedFav);
  });

  app.post('/api/users/:userId/fav', async(req, res) => {
    const userId = req.params.userId;
    const productId = req.body.id;

    await db.collection('users').updateOne({id: userId}, {
      $addToSet: {favItems: productId},
    });
    
    const user = await db.collection('users').findOne({ id: req.params.userId });
    const populatedFav = await populateFavoriteItems(user.favItems);
    res.json(populatedFav);
  });


  app.delete('/api/users/:userId/fav/:productId', async(req, res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;

    await db.collection('users').updateOne({id: userId}, {
      $pull: {favItems: productId},
    });

    const user = await db.collection('users').findOne({ id: req.params.userId });
    const populatedFav = await populateFavoriteItems(user.favItems);
    res.json(populatedFav);
  });

  app.delete('/api/users/:userId/cart', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      // Update the user document to remove all cart items
      await db.collection('users').updateOne({ id: userId }, { $set: { cartItems: [] } });
      
      // Send a success response
      res.status(204).send();
    } catch (error) {
      // If an error occurs, send an error response
      console.error('Error deleting cart items:', error);
      res.status(500).json({ error: 'An error occurred while deleting cart items' });
    }
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log('Server is listening on port ' + port)
  });
}

start();