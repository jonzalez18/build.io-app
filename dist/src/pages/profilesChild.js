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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const firebase_config_1 = require("../firebase.config");
const firestore_1 = require("firebase/firestore");
const store_1 = require("../store/store");
const profilesChild = () => {
    const [users, setUsers] = (0, react_1.useState)([]);
    const addUser = (0, store_1.useUser)((state) => state.addUser);
    const stateUser = (0, store_1.useUser)((state) => state.user);
    (0, react_1.useEffect)(() => {
        (0, firestore_1.onSnapshot)(firebase_config_1.userCollection, (snapshot) => {
            addUser(snapshot.docs.map((doc) => {
                return Object.assign({ id: doc.id }, doc.data());
            }));
            setUsers(snapshot.docs.map((doc) => {
                return Object.assign({ id: doc.id }, doc.data());
            }));
        });
    }, []);
    console.log(stateUser);
    return (react_1.default.createElement("div", { className: "flex items-center justify-center space-y-3\r\n                      md:flex-row md:space-y-0 md:space-x-6 md:mb-24 md:justify-end" },
        react_1.default.createElement("div", { className: 'grid gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 ' },
            react_1.default.createElement("div", { className: 'relative group' },
                react_1.default.createElement("img", { src: stateUser.map(img => img.profileImage), alt: '', className: 'w-72' }),
                react_1.default.createElement("div", { className: 'absolute bottom-0 left-0 right-0 p-2 px-4 \r\n                                   text-white duration-500 bg-black opacity-0 group-hover:opacity-100\r\n                                   bg-opacity-40' },
                    react_1.default.createElement("div", { className: 'flex justify-between w-full' },
                        react_1.default.createElement("div", { className: 'font-normal' },
                            react_1.default.createElement("p", { className: 'text-sm' }, stateUser.map(name => name.firstName)),
                            react_1.default.createElement("p", { className: "text-xs" }, stateUser.map(name => name.lastName))),
                        react_1.default.createElement("div", { className: 'flex items-center text-sm' }, stateUser.map(email => email.email.split('@')[0]))))))));
};
exports.default = profilesChild;
