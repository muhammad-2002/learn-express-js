const hendaler = (req,res)=>{
    console.log(req.accepts('json'))
    res.send('this is a get url')            
}
module.exports= hendaler