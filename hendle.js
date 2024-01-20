const handlereq=(req,res)=>{
    res.send("this is get url")
    console.log(req.app.locals.title)
}
module.exports = handlereq