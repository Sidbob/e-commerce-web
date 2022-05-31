import express from 'express';
import Mongoose from 'mongoose';
import userRoute from './routes/user.route';
import categoryRoute from './routes/category.route';
import sub_categoryRoute from './routes/sub_category.route';
import productRoute from './routes/product.route';
import userroleRoute from './routes/userrole.roter'
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();



app.use(cors())

app.use('/user',bodyParser.json(),userRoute)

app.use('/category',bodyParser.json(),categoryRoute)

app.use('/sub_category',bodyParser.json(),sub_categoryRoute)

app.use('/product', bodyParser.json(),productRoute)

app.use('/userrole',bodyParser.json(),userroleRoute)

// app.use('/public',express.static('public'))
// app.use(express.urlencoded({limit:'50mb', extended:true}))
// app.use(express.static('public'))








// app.use('/',userRoute)
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });











Mongoose.connect('mongodb://localhost:27017/web')
    .then(() => {
        console.log('mongodb started.');
    }).catch(() => {
        console.log("mongodb connection failed.");
    })


app.listen(3000, function () {
    console.log('Example app listening on port 3000 test!')
})