import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
  
app.use(express.static('public'))

// routes
import apiRouter from './routes/apiRouter.js'
app.use('/api', apiRouter)

app.get('/', (req, res) => {
    // res.sendFile('index.html');
    res.sendFile(path.resolve("public", "index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});