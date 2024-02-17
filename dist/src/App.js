"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_1 = __importDefault(require("react"));
const Auth_1 = require("./components/routes/Auth");
const react_router_dom_1 = require("react-router-dom");
const routes_1 = __importDefault(require("./components/routes/routes"));
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Auth_1.AuthContextProvider, null,
            react_1.default.createElement(routes_1.default, null))));
}
exports.default = App;
