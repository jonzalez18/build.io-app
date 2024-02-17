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
const firestore_1 = require("firebase/firestore");
const firebase_config_1 = require("../../firebase.config");
const user_events_1 = __importDefault(require("../../types/user-events"));
const react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
const react_router_dom_1 = require("react-router-dom");
const AddCalender = () => {
    const userEvents = (0, user_events_1.default)(state => state.userEvents);
    const [event, setEvent] = (0, react_1.useState)({
        title: '',
        dateStart: '',
        dateEnd: ''
    });
    const [startDate, setStartDate] = (0, react_1.useState)(new Date());
    const [endDate, setEndDate] = (0, react_1.useState)(new Date());
    const addEvent = (eventData) => __awaiter(void 0, void 0, void 0, function* () {
        const newEvent = yield (0, firestore_1.addDoc)(firebase_config_1.eventsCollection, Object.assign({}, eventData));
        console.log(`the new event was added ${newEvent.path}`);
    });
    const addNewEvent = (e) => {
        e.preventDefault();
        addEvent({
            title: event.title,
            dateStart: startDate.toString(),
            dateEnd: endDate.toString()
        });
        console.log('success event');
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
    return (react_1.default.createElement("div", { className: "grid grid-rows-1 justify-center" },
        react_1.default.createElement("div", { className: "block p-6 rounded-lg shadow-lg bg-white max-w-md border-slate-100 border-y-2 border-x-2" },
            react_1.default.createElement("form", null,
                react_1.default.createElement("div", { className: "form-group mb-6" },
                    react_1.default.createElement("input", { onChange: onFormFieldChange, name: "title", type: "text", className: "form-control block\r\n        w-full\r\n        px-4\r\n        py-1.5\r\n        text-base\r\n        font-extralight\r\n        text-gray-700\r\n        bg-white bg-clip-padding\r\n        border border-solid border-gray-300\r\n        rounded-xl\r\n        transition\r\n        ease-in-out\r\n        m-0\r\n        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none", id: "exampleInput7", placeholder: "Add Event Description" })),
                react_1.default.createElement("div", { className: "grid grid-cols-2 items-center" },
                    react_1.default.createElement(react_datepicker_1.default, { className: "col-span-1 justify-center rounded-xl my-2 mr-2 px-1 shadow-lg border-stone-300 font-extralight text-center text-sm", selected: startDate, onChange: (date) => setStartDate(date), showTimeSelect: true, timeFormat: "p", timeIntervals: 15, dateFormat: "Pp" }),
                    react_1.default.createElement(react_datepicker_1.default, { className: "col-span-1 justify-center rounded-xl my-2 mr-2 px-1 shadow-lg border-stone-300 font-extralight text-center text-sm", selected: endDate, onChange: (date) => setEndDate(date), showTimeSelect: true, timeFormat: "p", timeIntervals: 15, dateFormat: "Pp" })),
                react_1.default.createElement("button", { onClick: addNewEvent, type: "submit", className: "\r\n      w-full\r\n      px-6\r\n      py-2.5\r\n      bg-blue-600\r\n      text-white\r\n      font-medium\r\n      text-xs\r\n      leading-tight\r\n      uppercase\r\n      rounded\r\n      shadow-md\r\n      hover:bg-blue-700 hover:shadow-lg\r\n      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0\r\n      active:bg-blue-800 active:shadow-lg\r\n      transition\r\n      duration-150\r\n      ease-in-out" }, "Add New Event")),
            react_1.default.createElement(react_router_dom_1.Link, { to: '/calender', type: "submit", className: "\r\n      w-full\r\n      px-6\r\n      py-2.5\r\n      my-4\r\n      text-center\r\n      bg-blue-600\r\n      text-white\r\n      font-medium\r\n      text-xs\r\n      leading-tight\r\n      uppercase\r\n      rounded\r\n      shadow-md\r\n      hover:bg-blue-700 hover:shadow-lg\r\n      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0\r\n      active:bg-blue-800 active:shadow-lg\r\n      transition\r\n      duration-150\r\n      ease-in-out" }, "Go to Events Page"))));
};
exports.default = AddCalender;
