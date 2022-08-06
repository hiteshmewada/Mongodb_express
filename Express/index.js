const express = require('express')
const app = express()
const path=require('path');
const port = 3000

const hiteshMiddleWare=(req,res,next)=>{
    // console.log(req);
}
// app.use(express.static(path.join(__dirname,"public")))
// app.use(hiteshMiddleWare)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World! '+req.params.name)
})

app.get('/about', (req, res) => {
    // res.send('About')
    // res.sendFile(path.join(__dirname,'index.html'));
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})