import "dotenv/config";
import path from 'path';
import express from 'express';
import routes from './routes';

// console.log(process.env.DATABASE_USER);

const app = express();

app.set('layout', 'layout');
app.set('view engine','ejs');

app.use(express.urlencoded({extended: true}))

app.set('views', path.join(__dirname, 'views'));

routes(app);

app.listen(3002, () => {
    console.log('Listening on port 3002: http://localhost:3002');
});