// // app.use(express.json) return jeson data
// // app.use(express.raw)   //return buffer data
// app.use(express.static)
// // const router= express.Router({
// //     caseSensitive: true
// // })
//router///
// const express = require('express')
// const app = express();
// const ruter= express.Router({
//     caseSensitive: true,
// })
// app.use(ruter)

// ruter.get('/about',(req,res)=>{
//     res.send('this is a post url')
//     console.log(req.body)

// })
// app.listen(3000,()=>{
//     console.log("lessning port 3000")
// })






// static (secuire file)

// const express = require('express')
// const app = express();
// app.use(express.static(`${__dirname}/public/`))

// app.get('/',(req,res)=>{
//     res.send('this is a post url')
//     console.log(req.body)

// })
// app.listen(3000,()=>{
//     console.log("lessning port 3000")
// })

//app.locals

// const express = require('express');
// const app= express();
// const handlereq = require('./hendle')
//  app.use(express.static(`${__dirname}/public/`,{
//      index: 'hasina.html'

// }))

// app.locals.title= 'my name';
// // app.use(router)
// app.get('/about',handlereq)

// app.listen(3000,()=>{
//     console.log('lessing port 3000')
// })



//app.mountpahth

// const express = require('express');
// const app= express();
// const admin = express()


// admin.get('/dashboard/hello/world',(req,res)=>{
//     res.send("this is Dashboard")
//     console.log(admin.mountpath)
// })
// app.get('/',(req,res)=>{
//     res.send("This is post url")  
// })
// app.use('/admin',admin)
// app.listen(3000,()=>{
//     console.log('lessing port 3000')
// })


///mount
// const express = require('express');
// const app= express();
// const admin = express()
// admin.on('mount', function (parent) {
//     console.log('Admin Mounted')
//     console.log(parent) // refers to the parent app
//   })

// admin.get('/dashboard/hello/world',(req,res)=>{
//     res.send("this is Dashboard")
//     console.log(admin.mountpath)
// })
// app.get('/',(req,res)=>{
//     res.send("This is post url")  
// })
// app.use('/admin',admin)
// app.listen(3000,()=>{
//     console.log('lessing port 3000')
// })

//////app.all
// const express = require('express');
// const app= express();
// app.all('/',(req,res)=>{
//     res.send("This is all methoed subpoteed hetting post man app url")  
// })
// app.listen(3000,()=>{
//     console.log('lessing port 3000')
// })



///app.delete (workin for delete method)

///abb.enable disable

// const express = require('express');
// const app= express();
// app.enable('case sensitive routing')
// // app.disable('case sensitive routing')
// app.get('/about',(req,res)=>{
//     res.send("Cse cencivity enable and disable")  
// })
// app.listen(3000,()=>{
//     console.log('lessing port 3000')
// })

//app.enabled disabled(returns true or false)

//app.set (value set ) app.get value (get )
//app.Method (all method get post...)
//app.listen (two value needed port, calback functions)


//important: app.param

// const express = require('express')
// const app = express()
// app.param('id',(req,res,next,id)=>{
//     const user={
//         userId:id,
//         name:'bangladesh'
//     }
//     req.userDeatils= user
//     next()

// })

// app.get('/Home/:id',(req,res)=>{
//     res.send('this is a home url')
//     console.log(req.userDeatils)
// })

// app.listen(3000,()=>{
//     console.log('lessning port 3000')
// })

//app.route

// const express =require('express')
// const app = express()

// app.route('/about/portfolio')
//      .get((req,res)=>{
//         res.send('"this is get url"')
//      })
//      .post((req,res)=>{
//         res.send('"this is post url"')
//      })

// app.listen(3000,()=>{
//     console.log('lessning port 3000')
// })



//app.engine

// const express= require('express');
// const app= express();
// app.set('view engine' ,'ejs')
// app.route('/about/mission')
//     .get((req,res)=>{
//         res.render("pages/about")
//     })
// app.listen(3000,()=>{
//     console.log('lesnaning prort 3000')
// })

////////////////////////Practice Task ////////////////////////////////////////

// req.baseurl,
//req.originalurl,
//req.path,
//req.hostname,
//req.Method,
//req.protocol,
//req.params,
//req.query,
//req.body
//req.cookies,
//singedcokies,
//req.secure 

////////////////////////////////// base url and original url//////////////////////////
// const express = require('express')
// const app = express();
// const adminRoute = express.Router();     
// adminRoute.get('/Dashboard',(req,res)=>{                                                  
//     console.log(req.originalUrl);            
//     console.log(req.url);                      
//     res.send("We are admin dashbord")          
// })
// app.use('/admin',adminRoute)

// app.get('/about',(req,res)=>{
//     res.send('this is a get url')
//     console.log(req.url)             
//     console.log(req.originalUrl)
// })
// app.listen(3000,()=>{
//     console.log("lessning port 3000")
// })


//req.original provider full url root app and base app
///req.baseurl provide sub route link
// req.url- core-node url it can't provide
//used sub url
//req.path provide route path not provide use path 
// req.hostname not change return localhost
//req.ip return ::1
//req.method return Uppercase POST
//req.protocol //HTTP
//req.params return obj req header if you send resive id: it is java script object
//req.queary return queary header javascript object
//req.body requrn object but use express.json()
//req.cookie frist process cookie-perser install then  setup cookies
//req.route

// const express = require('express');

// const hendaler = require('./hendelar')
// const app = express();

// const adminRoute = express.Router();
// adminRoute.get('/Dashboard',(req,res)=>{
   
//     console.log();
    
//     res.send("We are admin dashbord")

// })
// app.use('/admin',adminRoute)


// app.get('/about',(req,res)=>{
//     res.send('this is a get url')            
    

// })
// app.post('/about',hendaler)
// app.listen(3000,()=>{
//     console.log("lessning port 3000")
// })


//>>>>>>>>>>>>>>>>>>>>>>>>>>.Response methoad>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//res.locals
// const express = require('express');
// const app = express();
// app.set('view engine', 'ejs');

// app.get('/about', (req, res) => {
//     res.render('pages/about', {
//         name: 'Masum',
//     });
// });

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// });

//////////////////////// res.format/////////////////////////////////////
// const express = require('express');
// const app = express();
// app.set('view engine', 'ejs');

// app.get('/about', (req, res) => {
//     res.format({
//         "text/plain":()=>{
//             res.send('hi')

//         },
//         "application/json":()=>{
//             res.json({name:"muhammad"})
//         },
//         "text/html":()=>{
//             res.render('pages/about',{
//                 name:"Muhammad Billah"
//             })
//         },
//         default:()=>{
//             res.status(406).send('not Accept')

//         }
// })
// });

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// });


//cookie set name value any protocol(optional)
//////////////res.cookie////////////////////////////////
// const express = require('express');
// const app = express();
// app.set('view engine', 'ejs');

// app.get('/about', (req, res) => {
//     res.cookie('name','muhammae');
//     res.end()
// });

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// });


// res.set get

// const express = require('express');
// const app = express();
// app.set('view engine', 'ejs');
// app.get('/text',(req,res)=>{
//    res.send('hele')

// })

// app.get('/about', (req, res) => {
//    res.set('platform','mb unique tech')
//    console.log(res.get('platform'))
//    res.end();
// });

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// });

//res.redirect
// const express = require('express');
// const app = express();
// app.set('view engine', 'ejs');
// app.get('/text',(req,res)=>{
//    res.send('hele')

// })

// app.get('/about', (req, res) => {
//    res.redirect('/text')
//    res.end()
// });

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// });




///////////////////////////////////Middleware ////////////////////////////////////////////////

// const express = require('express');
// const app = express();

// const myMiddleware =(req,res,next)=>{
//     console.log('This ia a Middleware');
//     next();

// }
// app.use(myMiddleware)

// const myMiddleware1 =(req,res,next)=>{
//     console.log('This ia a Middleware -1');
//     next();

// }
// app.use(myMiddleware1)


// app.get('/about', (req, res) => {
//     res.send('This is a about Url')

// });

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// })


// Logger application level

// const express = require('express');
// const app = express();

// const logger =(req,res,next)=>{
//     console.log(`${new Date(Date.now()).toDateString()} - ${req.method} - ${req.ip} ---- ${req.originalUrl} --- ${req.url}`);
//     next();

// }
// app.use(logger)


// app.get('/about', (req, res) => {
//     res.send('This is a about Url')

// });

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// })

//Router level Middleware

// const express = require('express');
// const app = express();
// const adminRouter = express.Router();

// const logger =(req,res,next)=>{
//     console.log(`${new Date(Date.now()).toDateString()} - ${req.method} - ${req.ip} - ${req.originalUrl} - ${req.url}`);
//     next();

// }
// adminRouter.use(logger)

// adminRouter.get('/Dashboard',(req,res)=>{
//     res.send('Dashboard')

// })
// app.use('/admin',adminRouter)


// app.get('/about', (req, res) => {
//     res.send('This is a about Url')

// });

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// })

// third party level middleware(cookie parser middleware)

//Third party middleware
// const express = require('express');
// const app = express();
// const adminRouter = express.Router();
// const cookieParser = require('cookie-parser')


// const logger =(req,res,next)=>{
//     console.log(`${new Date(Date.now()).toDateString()} - ${req.method} - ${req.ip} - ${req.originalUrl} - ${req.url}`);
//     next();

// }
// adminRouter.use(logger)

// adminRouter.get('/Dashboard',(req,res)=>{
//     res.send('Dashboard')

// })
// app.use(cookieParser)
// app.use('/admin',adminRouter)


// app.get('/about', (req, res) => {
//     res.send('This is a about Url')

// });

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// })


//built-in middleware(app.use(express.json()))


// Error Handling Middleware 

// const express = require('express');
// const app = express();
// const adminRouter = express.Router();

// const logger =(req,res,next)=>{
//     console.log(`${new Date(Date.now()).toDateString()} - ${req.method} - ${req.ip} - ${req.originalUrl} - ${req.url}`);
//     throw new Error ('This an Error')

// }
// adminRouter.use(logger)

// adminRouter.get('/Dashboard',(req,res)=>{
//     res.send('Dashboard')

// })
// app.use('/admin',adminRouter)


// app.get('/about', (req, res) => {
//     res.send('This is a about Url')

// });

// const errorMiddleware=(err,req,res,next)=>{
//     console.log(err.message)
//     res.status(500).send('This is a server side Error')

// }
// adminRouter.use(errorMiddleware)


// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// })


//Configure MiddleWare(advanced)

// const express = require('express');
// const app = express();
// const adminRouter = express.Router();



// const loogerWrapper =(Option)=>{
//     return function (req,res,next){
//         if(Option.log){
//             console.log(`${new Date(Date.now()).toDateString()} - ${req.method} - ${req.ip} - ${req.originalUrl} - ${req.url}`);
//             next();
        
//         }
//         else{
//             throw new Error('faild to log')
//         }

//     }
// }
// adminRouter.use(loogerWrapper({log:false}))

// adminRouter.get('/Dashboard',(req,res)=>{
//     res.send('Dashboard')

// })
// app.use('/admin',adminRouter)


// app.get('/about', (req, res) => {
//     res.send('This is a about Url')

// });

// const errorMiddleware=(err,req,res,next)=>{
//     console.log(err.message)
//     res.status(500).send('This is a server side Error')

// }
// adminRouter.use(errorMiddleware)


// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// })
