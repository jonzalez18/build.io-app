"use strict";
exports.__esModule = true;
require("./App.css");
var react_1 = require("react");
var Auth_1 = require("./components/routes/Auth");
var react_router_dom_1 = require("react-router-dom");
var routes_1 = require("./components/routes/routes");
//@ts-ignore
var practice_ts_1 = require("./types/practice.ts");
//@ts-ignore
var practice_ts_2 = require("./types/practice.ts");
function App() {
    console.log((0, practice_ts_2["default"])('hello'));
    var a = 4;
    var b = 2;
    console.log((0, practice_ts_1.multiply)(a, b));
    console.log((0, practice_ts_1.multiplyByTwo)(a));
    return (<react_router_dom_1.BrowserRouter>
        <Auth_1.AuthContextProvider>
      
          </Auth_1.AuthContextProvider>
        </react_router_dom_1.BrowserRouter>);
}
exports["default"] = App;
