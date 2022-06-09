const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const config = require("config");
const ejsMate = require("ejs-mate");
const router = express.Router();
//app.use( express.static(__dirname, 'public'))n

const dbConfig = config.get('izurays.dbConfig.dbName');

app.use(express.static(path.join(__dirname, "public")));
//add the router
app.use('/', router);
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

 mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then( ()=>{
    console.log('Database Connected');
  }).catch( err=>{
    console.log('Database not connected'+ err);
  });



router.get('/',function(req,res){
  res.render('index');
 // res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/works', (req,res)=>{
 res.render('works');
});



//app.listen(3000, () => console.log('Server ready'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});


