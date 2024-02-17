"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const express_1 = __importDefault(require("express"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const port = 5000;
const app = (0, express_1.default)();
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(require('./sa.json')),
    databaseURL: "https://build-tailwind-app.firebaseio.com"
});
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: '*' }));
// app.use(CookieOptions)
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const idToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    console.log(idToken);
    if (!idToken) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
    try {
        const decodedToken = yield (yield firebase_admin_1.default.auth().verifyIdToken(idToken));
        console.log(decodedToken, "decode in verify token try block");
        if (decodedToken) {
            res.locals.decodedToken = decodedToken;
            return next();
        }
    }
    catch (err) {
        return res.status(500).send({ message: 'Internal Error' });
    }
});
exports.verifyToken = verifyToken;
app.use(exports.verifyToken);
app.get('/api/protected', (req, res) => {
    res.send(res.locals.decodedToken);
    console.log(res.locals.decodedToken);
});
let eventsArray = ([]);
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
function ReturnData(data) {
    console.log(data, 'data');
    eventsArray = data;
}
app.use(ReturnData);
app.get('/user/calender', (req, res, next) => {
    console.log(res.locals.eventsArray, "reqBody");
});
app.post('/user/blogs', (req, res) => {
    res.send(res.locals.decodedToken);
    console.log(res.locals.decodedToken);
});
app.get('/user/blogs', (req, res) => {
    res.send(res.locals.decodedToken);
    console.log(res.locals.decodedToken);
});
app.listen(port, () => {
    console.log(`now listenin on port ${port}`);
});
