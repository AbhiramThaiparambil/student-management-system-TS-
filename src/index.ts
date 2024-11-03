import express from "express";
import bodyParser, { urlencoded } from "body-parser"; 
import schoolRoutes from './routes/schoolRoutes';


const app=express()

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',schoolRoutes);


const PORT=3000;

app.listen(PORT,()=>{
console.log(`Server is running on http://localhost:${PORT}`);
    
})