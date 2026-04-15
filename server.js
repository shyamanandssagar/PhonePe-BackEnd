require('dotenv').config();
const express=require('express')

const authRoutes=require('./src/routes/auth.routes')
const swaggerUi = require('swagger-ui-express');
const connectDB=require('./src/config/db')

let swaggerDocument = {};
try {
  swaggerDocument = require('./swagger-output.json');
} catch (e) {
  console.log("Swagger doc not generated yet. Run 'npm run swagger'");
}

const app=express();

const PORT=process.env.PORT || 3000;


connectDB();

app.use(express.json());
app.use(express.urlencoded())











app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/",(req,res)=>{
  res.send('PhonePe Backend System is running')
})



app.use('/api/auth',authRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});