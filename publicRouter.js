
// const express =require('express');
// const publicRouter= express.Router();

// publicRouter.get('/',(req,res)=>{
//     res.send('Home')
// })
// publicRouter.get('/about',(req,res)=>{
//     res.send('about')
// })
// module.exports = publicRouter;



//Router all Implementation 

// const express =require('express');
// const publicRouter= express.Router();
// const log = (req,res)=>{
//     console.log("This is a log ")

// }
// publicRouter.all('*',log)

// publicRouter.get('/',(req,res)=>{
//     res.send('Home')
// })
// publicRouter.get('/about',(req,res)=>{
//     res.send('about')
// })
// module.exports = publicRouter;

//Router.param

// const express =require('express');
// const publicRouter= express.Router();
// publicRouter.param('user',(req ,res ,next ,id)=>{
//     req.user = id ==='1'?'admin': 'Anoniymuch';
//     next()
// })

// another way

// publicRouter.get('/:user',(req,res)=>{
//     res.send(`helo ${req.user}`)
// })
// publicRouter.get('/about',(req,res)=>{
//     res.send('about')
// })
// module.exports = publicRouter;


/////////////Public router.route method////
//  const express =require('express');
//  const publicRouter= express.Router();
//  publicRouter
//             .route('/user')
//             .all((req,res,next)=>{
//                 console.log("I am login Somthing");
//                 next()
//             })
//             .get((req,res)=>{
//                 res.send('Get')
//             })
//             .post((req,res)=>{
//                 res.send('Post')
//             })
//             .put((req,res)=>{
//                 res.send('put')
//             })
//             .delete((req,res)=>{
//                 res.send('delete')
//             })
// module.exports= publicRouter

///////////Router.use////////////

const express =require('express');
const adminRouter = require('./admin');

const publicRouter= express.Router();
publicRouter.use((req,res,next)=>{
    console.log('loging')
    next()
})
publicRouter.use(adminRouter)
module.exports = publicRouter