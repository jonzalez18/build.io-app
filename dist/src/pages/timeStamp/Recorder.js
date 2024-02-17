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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./events.css");
const user_events_1 = require("../../types/user-events");
require("./cal.css");
const classnames_1 = __importDefault(require("classnames"));
const addZero = (num) => (num < 10 ? `0${num}` : `${num}`);
const Recorder = () => {
    const { record, startRecorder, stopRecorder } = (0, user_events_1.useRecorder)(state => state);
    const started = record.dateStart !== '';
    let interval = (0, react_1.useRef)(0);
    const [, setCount] = (0, react_1.useState)(0);
    const handleClick = (e) => {
        if (started) {
            window.clearInterval(interval.current);
            stopRecorder('');
        }
        else {
            startRecorder('');
            interval.current = window.setInterval(() => {
                setCount(count => count + 1);
            }, 1000);
        }
        e.preventDefault();
        console.log("firing");
    };
    (0, react_1.useEffect)(() => {
        return () => {
            window.clearInterval(interval.current);
        };
    }, []);
    let seconds = started ?
        Math.floor((Date.now()
            - new Date(record.dateStart).getTime()) / 1000) : 0;
    const hours = seconds ? Math.floor(seconds / 60 / 60) : 0;
    seconds -= hours * 60 * 60;
    const minutes = seconds ? Math.floor(seconds / 60) : 0;
    seconds -= minutes * 60;
    return (react_1.default.createElement("div", { id: 'recorder', className: (0, classnames_1.default)("recorder", { 'recorder-started': started }) },
        react_1.default.createElement("button", { onClick: handleClick, className: "recorder-record btn" },
            react_1.default.createElement("span", null)),
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", { className: "recorder-counter " },
            addZero(hours),
            ": ",
            addZero(minutes),
            ": ",
            addZero(seconds))));
};
exports.default = Recorder;
