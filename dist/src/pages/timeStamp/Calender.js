"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
// import './cal.css'
require("./Calender.css");
const user_events_1 = __importDefault(require("../../types/user-events"));
const firestore_1 = require("firebase/firestore");
const firebase_config_1 = require("../../firebase.config");
const fi_1 = require("react-icons/fi");
const react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
const Auth_1 = require("../../components/routes/Auth");
const axios_1 = __importDefault(require("axios"));
const addZero = (num) => (num < 10 ? `0${num}` : `${num}`);
const createDayKey = (date) => {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    return `${addZero(year)}-${addZero(month)}-${addZero(day)}`;
};
const groupEventsByDay = (events) => {
    const groups = {};
    const addToGroup = (dateKey, event) => {
        if (groups[dateKey] === undefined) {
            groups[dateKey] = [];
        }
        groups[dateKey].push(event);
    };
    events.forEach(event => {
        const dateStartKey = createDayKey(new Date(event.dateStart));
        const dateEndKey = createDayKey(new Date(event.dateEnd));
        const title = event.title;
        addToGroup(dateStartKey, event);
        if (dateEndKey !== dateStartKey) {
            addToGroup(dateEndKey, event);
        }
    });
    return groups;
};
const Calender = () => {
    const { token } = (0, Auth_1.UserAuth)();
    let groupedEvents;
    let sortedGroupKeys;
    const [userEventsState, setUserEventsState] = (0, react_1.useState)([{
            id: '',
        }]);
    const [userEventsNew, setUserEventsNew] = (0, react_1.useState)([]);
    const [event1, setEvent1] = (0, react_1.useState)('');
    const [event, setEvent] = (0, react_1.useState)({
        id: '',
        title: '',
        dateStart: '',
        dateEnd: ''
    });
    const { userEvents, addUserEvent } = (0, user_events_1.default)(state => state);
    const [showModal, setShowModal] = (0, react_1.useState)(false);
    const [startDate, setStartDate] = (0, react_1.useState)(new Date());
    const [endDate, setEndDate] = (0, react_1.useState)(new Date());
    console.log(event1);
    const deleteEvent = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const document = (0, firestore_1.doc)(firebase_config_1.db, `events/${id}`);
        yield (0, firestore_1.deleteDoc)(document);
        console.log('an Event has now been deleted');
    });
    const updateEvent = (id, docData) => __awaiter(void 0, void 0, void 0, function* () {
        const getEvent = (0, firestore_1.doc)(firebase_config_1.db, `events/${event1}`);
        yield (0, firestore_1.setDoc)(getEvent, docData, { merge: true });
        console.log('The Event has been updated');
    });
    const update = (e) => {
        e.preventDefault();
        updateEvent(event1, {
            title: event.title,
            dateStart: startDate.toString(),
            dateEnd: endDate.toString()
        });
    };
    const onFormFieldChange = (e) => {
        const target = e.target;
        const newFormValue = target.value;
        const nameOfField = target.name;
        setEvent((prevState) => {
            const newFormObject = Object.assign({}, prevState);
            newFormObject[nameOfField] = newFormValue;
            return newFormObject;
        });
    };
    const getCalender = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield axios_1.default.get('http://localhost:5000/user/calender', { headers: {
                'Authorization': `Bearer ${token}`
            } }).then((res) => {
            return res;
        }).then(console.log).catch(console.log);
    });
    (0, react_1.useEffect)(() => {
        getCalender();
        //   onSnapshot(eventsCollection,
        //     (snapshot: QuerySnapshot<DocumentData>) => {
        //         setUserEventsState(snapshot.docs.map((doc) => {
        //             return {
        //                 id: doc.id,
        //                 ...doc.data()
        //             };
        //           }))
        //           addUserEvent(snapshot.docs.map((doc) => {
        //             return {
        //                  id: doc.id,
        //               ...doc.data()
        //             };
        //           }))
        //         })
    }, []);
    console.log(userEvents);
    console.log(userEventsState);
    if (userEventsState.length) {
        groupedEvents = groupEventsByDay(userEventsState);
        sortedGroupKeys = Object.keys(groupedEvents).sort((date1, date2) => +new Date(date1) - +new Date(date2));
    }
    const handleDeletedEvent = (event) => {
        const id = event.currentTarget;
        let id1 = id.id;
        console.log(id);
        deleteEvent(id1);
    };
    // const handleEditEvent = (event) => {
    //     const id: any = event.currentTarget;
    //     let id1 = id.id 
    //     console.log(id)
    //     const url = `/time/${id1}`
    // }
    return groupedEvents && sortedGroupKeys ? (react_1.default.createElement("div", { className: "flex flex-wrap justify-center mx-8 my-1 p-x-10 p-y-10" }, userEventsState.map(event => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const start = event.dateStart;
        const end = event.dateEnd;
        const month = new Date(start).toLocaleString('en-Us', { month: 'long' });
        const day = new Date(end).getUTCDate();
        const mon = months.filter(month => months.indexOf(month) === day + 1);
        const hour = new Date(start).getUTCHours();
        const minutes = new Date(start).getUTCMinutes();
        const endHour = new Date(end).getUTCHours();
        const endminutes = new Date(end).getUTCMinutes();
        // const events = groupedEvents[day].map( events => events)
        // const end = groupedEvents[day].map(events => events.dateEnd)
        // const title = groupedEvents[day].map(events => events.title)
        // const start = groupedEvents[day].map(events => events.dateStart)
        // const groupDate = new Date(day);
        // const day1 = groupDate.getDate();
        // const key = groupedEvents[day]
        // const month = groupDate.toLocaleString(undefined, {month: 'long'})
        return (react_1.default.createElement("div", { key: event.id, className: "grid grid-col-2 sm:grid-col-2 md:grid-col-3 my-10 mx-5 p-2 border-cyan-200  border-2 shadow-xl rounded-lg bg-cyan-50" },
            react_1.default.createElement("div", { className: "flex justify-center flex-row-reverse my-2 rounded-sm shadow-xl bg-cyan-300" },
                react_1.default.createElement("span", { className: "font-semibold" },
                    month,
                    " ",
                    day)),
            react_1.default.createElement("div", { className: "flex justify-center bg-cyan-200 rounded-md shadow-lg" },
                react_1.default.createElement("div", { className: "calender-event" },
                    react_1.default.createElement("div", { className: "calender-events-info grid grid-col-2" },
                        react_1.default.createElement("button", { id: event.id, onClick: handleDeletedEvent, className: "pl-40 mx-2" }, "\u00D7"),
                        react_1.default.createElement("div", { className: "flex justify-center font-medium" }, event.title),
                        react_1.default.createElement("div", { className: "flex justify-center mb-4 font-light" },
                            addZero(hour),
                            ":",
                            addZero(minutes),
                            ' - ',
                            addZero(endHour),
                            ":",
                            addZero(endminutes)),
                        react_1.default.createElement("button", { id: event.id, onClick: () => setEvent1(event.id), className: "pl-40 pb-2 mx-2" },
                            react_1.default.createElement(fi_1.FiEdit, null))))),
            event1 ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" },
                    react_1.default.createElement("button", { onClick: () => setEvent1(''), className: "pl-40 pb-40 mx-2" }, "\u00D7"),
                    react_1.default.createElement("div", { className: "grid grid-rows-1 justify-center" },
                        react_1.default.createElement("div", { className: "block p-6 rounded-lg shadow-lg bg-white max-w-md border-slate-100 border-y-2 border-x-2" },
                            react_1.default.createElement("form", null,
                                react_1.default.createElement("div", { className: "form-group mb-6" },
                                    react_1.default.createElement("input", { onChange: onFormFieldChange, name: "title", type: "text", className: "form-control block\r\n        w-full\r\n        px-4\r\n        py-1.5\r\n        text-base\r\n        font-extralight\r\n        text-gray-700\r\n        bg-white bg-clip-padding\r\n        border border-solid border-gray-300\r\n        rounded-xl\r\n        transition\r\n        ease-in-out\r\n        m-0\r\n        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none", id: "exampleInput7", placeholder: "Add Event Description" })),
                                react_1.default.createElement("div", { className: "grid grid-cols-2 items-center" },
                                    react_1.default.createElement(react_datepicker_1.default, { className: "col-span-1 justify-center rounded-xl my-2 mr-2 px-1 shadow-lg border-stone-300 font-extralight text-center text-sm", selected: startDate, onChange: (date) => setStartDate(date), showTimeSelect: true, timeFormat: "p", timeIntervals: 15, dateFormat: "Pp" }),
                                    react_1.default.createElement(react_datepicker_1.default, { className: "col-span-1 justify-center rounded-xl my-2 mr-2 px-1 shadow-lg border-stone-300 font-extralight text-center text-sm", selected: endDate, onChange: (date) => setEndDate(date), showTimeSelect: true, timeFormat: "p", timeIntervals: 15, dateFormat: "Pp" })),
                                react_1.default.createElement("button", { onClick: update, type: "submit", className: "\r\n      w-full\r\n      px-6\r\n      py-2.5\r\n      bg-blue-600\r\n      text-white\r\n      font-medium\r\n      text-xs\r\n      leading-tight\r\n      uppercase\r\n      rounded\r\n      shadow-md\r\n      hover:bg-blue-700 hover:shadow-lg\r\n      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0\r\n      active:bg-blue-800 active:shadow-lg\r\n      transition\r\n      duration-150\r\n      ease-in-out" }, "Udate Event"))))))) :
                null));
    }))) : (react_1.default.createElement("p", null, "Loading..."));
};
exports.default = Calender;
