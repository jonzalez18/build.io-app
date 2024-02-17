"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Calender_1 = __importDefault(require("./Calender"));
const Navbar_1 = __importDefault(require("../../components/Navbar"));
const footer_1 = __importDefault(require("../../components/footer"));
const addCalender_1 = __importDefault(require("./addCalender"));
const FullCalender_1 = __importDefault(require("./FullCalender"));
const Time = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement("h1", { className: 'flex justify-center text-xl text-slate-900 my-4' }, "Add New Training Event"),
        react_1.default.createElement(addCalender_1.default, null),
        react_1.default.createElement(FullCalender_1.default, null),
        react_1.default.createElement(Calender_1.default, null),
        react_1.default.createElement(footer_1.default, null)));
};
exports.default = Time;
