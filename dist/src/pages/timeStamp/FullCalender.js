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
const moment_1 = __importDefault(require("moment"));
require("./newcal.css");
const firestore_1 = require("firebase/firestore");
const firebase_config_1 = require("../../firebase.config");
const react_modal_1 = __importDefault(require("react-modal"));
const addCalender_1 = __importDefault(require("./addCalender"));
const axios_1 = __importDefault(require("axios"));
const Auth_1 = require("../../components/routes/Auth");
const FullCalender = () => {
    const { token } = (0, Auth_1.UserAuth)();
    const [calender, setCalender] = (0, react_1.useState)([]);
    const [value, setValue] = (0, react_1.useState)((0, moment_1.default)());
    const startDay = value.clone().startOf("month");
    const endDay = value.clone().endOf('month');
    const [userEventsState, setUserEventsState] = (0, react_1.useState)([{
            id: '',
        }]);
    // const [userEventUpdate, setUserEventUpdate] = useState<UserEvents>({
    //     id: ''
    // })
    const getCalender = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield axios_1.default.get('http://localhost:5000/user/blogs', { headers: {
                'Authorization': `Bearer ${token}`
            } }).then(user => {
            if (user) {
                (0, firestore_1.onSnapshot)(firebase_config_1.eventsCollection, (snapshot) => {
                    setUserEventsState(snapshot.docs.map((doc) => {
                        return Object.assign({ id: doc.id }, doc.data());
                    }));
                });
            }
        }).then(console.log).catch(console.log);
    });
    (0, react_1.useEffect)(() => {
        const a = [];
        const day = startDay.clone().subtract(1, 'day');
        while (day.isBefore(endDay, 'day')) {
            a.push(Array(7).fill(0).map(() => day.add(1, 'day').clone()));
        }
        setCalender(a);
    }, [value]);
    function isSelected(day, value) {
        return value.isSame(day, 'day');
    }
    function beforeToday(day) {
        return day.isBefore(new Date(), 'day');
    }
    function isToday(day) {
        return day.isSame(new Date(), 'day');
    }
    function dayStyles(day, value) {
        if (beforeToday(day))
            return 'before';
        if (isSelected(day, value))
            return 'selected';
        if (isToday(day))
            return 'today';
        return '';
    }
    function currMonthName() {
        return value.format('MMMM');
    }
    function currYear() {
        return value.format('YYYY');
    }
    function prevMonth() {
        return value.clone().subtract(1, 'month');
    }
    function nextMonth() {
        return value.clone().add(1, 'month');
    }
    function thisMonth() {
        return value.isSame(new Date(), 'month');
    }
    console.log(value);
    (0, react_1.useEffect)(() => {
        // onSnapshot(eventsCollection,
        //   (snapshot: QuerySnapshot<DocumentData>) => {
        //       setUserEventsState(snapshot.docs.map((doc) => {
        //           return {
        //               id: doc.id,
        //               ...doc.data()
        //           };
        //         }))
        //       })
        getCalender();
    }, []);
    console.log(userEventsState);
    let array = userEventsState.filter(events => {
        const start = events.dateStart;
        const month = new Date(start).toLocaleString('en-Us', { month: 'long' });
        if (currMonthName() === month) {
            return events;
        }
    });
    //  const getId = (events: UserEvents) => {
    //     setUserEventUpdate(events)
    //  }
    //  console.log(userEventUpdate)
    //  const updateEvent = async (id: string | undefined, docData: any) => {
    //     const getEvent = doc(db, `events/${id}`);
    //     await setDoc(getEvent, docData, {merge: true})
    //     console.log('The Event has been updated')
    // } 
    console.log(array);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = react_1.default.useState(false);
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
    function openModal() {
        setIsOpen(true);
        console.log('firing');
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex flex-wrap justify-center mb-10" },
            react_1.default.createElement("div", { className: 'calender1 mt-10 calender-grid flex flex-col-reverse justify-center' },
                react_1.default.createElement("div", { className: "body max-w-50 justify-center" },
                    react_1.default.createElement("div", { className: 'header1 flex flex-row-1 justify-center border-2 border-neutral-100 bg-cyan-200 shadow-xl' },
                        react_1.default.createElement("div", { onClick: () => !thisMonth() && setValue(prevMonth()), className: 'previous pr-20 flex justify-items-start hover:cursor-pointer' }, !thisMonth() ? String.fromCharCode(171) : null),
                        react_1.default.createElement("div", { className: 'current text-lg font-bold' },
                            currMonthName(),
                            " ",
                            currYear()),
                        react_1.default.createElement("div", { onClick: () => setValue(nextMonth()), className: 'next pl-20 hover:cursor-pointer' }, String.fromCharCode(187))),
                    react_1.default.createElement("div", { className: "flex flex-col-7 justify-center" }, ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => react_1.default.createElement("div", { className: 'text-lg text-bold week lg:w-30 md:w-20 sm:w-10 text-center font-semibold border-neutral-100 border-2 shadow-lg' }, d))),
                    calender.map(week => react_1.default.createElement("div", { className: 'flex flex-row justify-center' }, week.map(day => react_1.default.createElement("div", { onClick: () => !beforeToday(day) && setValue(day), className: 'day grid grid-row-7 lg:w-30 lg:h-30 md:h-20 md:w-20 sm:w-10 sm:h-10 text-center border-neutral-100 font-medium border-2 shadow-lg ' },
                        react_1.default.createElement("div", { className: 'hover:bg-slate-300 hover: cursor-pointer' },
                            " ",
                            day.format("D").toString(),
                            " ",
                            react_1.default.createElement("button", { onClick: openModal, className: 'grid-row-1  shadow-lg rounded-xl text-xs mx-2 bg-cyan-200 hover:bg-slate-400' }, array.map(events => {
                                const start = events.dateStart;
                                const day1 = new Date(start).getUTCDate();
                                if (day.format("D") == day1) {
                                    return events.title;
                                }
                                else {
                                    return null;
                                }
                            })))))))),
                react_1.default.createElement("div", { className: "flex flex-wrap relative" },
                    react_1.default.createElement(react_modal_1.default, { isOpen: modalIsOpen, onRequestClose: closeModal, style: customStyles, contentLabel: "Example Modal", ariaHideApp: false },
                        react_1.default.createElement(addCalender_1.default, null)))))));
};
exports.default = FullCalender;
