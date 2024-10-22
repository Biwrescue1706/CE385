// const express = require ('express');
// const app = express();

// app.use((req,res,next) =>{
//     console.log('Time', Date.now());
//     next();
// });

// app.get('/uesr',(req,res) =>{
//     res.send('User info')
// })

// app.listen(3000,()=>{
//     console.log('Server is running')
// });

// const express = require ('express');
// const app = express();
// const router = express .Router();

// router.use((req,res,next)=>{
//     console.log('Router Middleware:',req.method,req.url);
//     next();
// });

// router.get('/uesr/:id',(req,res)=>{
//     res.send(`User ${req.params.id}`);
// });

// app.use('api',router);
// app.get('/user',(req,res)=>{
//     res.send('Uesr info');
// })
// app.listen(3000,()=>{
//     console.log('Server is running on port 3000')
// });
// const express = require ('express');
// const app = express();

// app.get('/',(req,res,next) =>{
//     const err = new Error('Something went wrong!');
//     next(err);
// })

// app.use((err,req,res,next) =>{
//     console.error(err.stack);
//     res.status(500).send('Internal Server Error!');
// });

// app.listen(4000,()=>{
//     console.log('Server is running on port 4000');
// });
// const express = require ('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

// app.post('/data',(req,res)=>{
//     console.log(req,body);
//     res.send('Data received');
// })

// app.listen(4000,()=>{
//     console.log('Server is running on port 4000');
// });
// const express = require ('express');
// const cors = require('cors');
// const app = express();

// app.use(cors);
// const corsOptions={
//     origin: 'http://frontend.com',
//     methos: ['GET','POST'],
//     allowedHeaders: ['Content-Type']
// };
// app.use(cors(corsOptions));

// app.get('/api/data',(req,res)=>{
//     res.json({message:'This is cors enabled response'})
// })

// app.listen(4000,()=>{
//     console.log('Server is running on port 4000');
// });
const express = require ('express');
const app = express();

app.use(cors);
const corsOptions={
    origin: 'http://frontend.com',
    methos: ['GET','POST'],
    allowedHeaders: ['Content-Type']
};
app.use(cors(corsOptions));

app.get('/api/data',(req,res)=>{
    res.json({message:'This is cors enabled response'})
})

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});