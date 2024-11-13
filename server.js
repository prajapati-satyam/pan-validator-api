import express from 'express';
import path from 'path'
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

try {

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
} catch(err) {
    console.log('error in server listening : ', err);
}