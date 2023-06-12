// config inicial
const express = require("express");
const mongoose = require("mongoose");
const app = express();



// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//rotas da API

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial/endpoint
app.get("/", (req, res) => {
  // mostrar req

  res.json({ message: "Oi Express!" });
});

// mongodb+srv://beltrandes:46310045415dD@cluster0.mjwhkrj.mongodb.net/bancodaapi?retryWrites=true&w=majority
//entregar uma porta
mongoose.connect(
  "mongodb+srv://beltrandes:46310045415dD@cluster0.mjwhkrj.mongodb.net/bancodaapi?retryWrites=true&w=majority"
)
.then(() => {
    console.log('Conectado ao MongoDB!')
    app.listen(3000);


})
.catch((err) => console.log(err))
