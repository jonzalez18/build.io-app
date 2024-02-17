import express, {Request, Response, NextFunction} from "express";
import admin from "firebase-admin"
import cors from "cors"

import { DocumentData, onSnapshot, QuerySnapshot, collection } from "firebase/firestore";
import { db} from './firebase'
import { UserEvents } from "../src/types/user-events";
import "reflect-metadata"



const port = 5000;
const app = express();

admin.initializeApp({
    credential: admin.credential.cert(require('./sa.json')), 
    databaseURL: "https://build-tailwind-app.firebaseio.com"
})

app.use(express.json())
app.use(cors({origin: '*'}))

// app.use(CookieOptions)


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const idToken = req.headers.authorization?.split(" ")[1];
    console.log(idToken)
    if (!idToken) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    try {
      const decodedToken = await (await admin.auth().verifyIdToken(idToken));
      console.log(decodedToken, "decode in verify token try block")
      if(decodedToken) {
        res.locals.decodedToken = decodedToken
        return next()
      }
    
    } catch (err) {
      return res.status(500).send({ message: 'Internal Error' });
    }
  }


app.use(verifyToken)


  app.get('/api/protected', (req: Request, res: Response) => {
    res.send(res.locals.decodedToken)
    console.log(res.locals.decodedToken)
  })
  let eventsArray = <UserEvents[]>([])


  // const getEvents = async(req: Request, res: Response, next: NextFunction) => {
  //   let eventsArray: UserEvents[] = {
  //     id?: '',
  //     title: '',
  //     dateStart: '',
  //     dateEnd: ''

  //   }
  //   try {
  //     const eventsRef = await collection(db, 'events')

  //     const data = await  onSnapshot(eventsRef,
  //       (snapshot: QuerySnapshot<DocumentData>) => {
  //        eventsArray = (snapshot.docs.map((doc) => {
  //           console.log([doc.data()], 'docdata')
  //           return {
  //             id: doc.id,
  //             ...doc.data()
  //           };
   
  //         }))
  //       })
  //         console.log(res.locals.eventsArray , 'eventsArr')
  //         res.locals.eventsArry = 
  //           res.send(res.locals.eventsArray)
  //           next()
          
  //   }
  //   catch(error) {
  //     res.status(400).send(error.message)
  //   }
  // }
  function ReturnData (data: UserEvents[]) {
    console.log(data, 'data')
    eventsArray = data
    }
  app.use(ReturnData)

  app.get('/user/calender', (req: Request, res: Response, next: NextFunction) => {
    console.log(res.locals.eventsArray, "reqBody")
  })

  app.post('/user/blogs',  (req, res) => {
    res.send(res.locals.decodedToken)
    console.log(res.locals.decodedToken)
    })

app.get('/user/blogs',  (req, res) => {
res.send(res.locals.decodedToken)
console.log(res.locals.decodedToken)
})




app.listen(port, () => {
    console.log(`now listenin on port ${port}`)
})   
