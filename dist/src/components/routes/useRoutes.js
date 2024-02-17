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
const React = __importStar(require("react"));
const Auth_1 = require("./Auth");
const react_1 = require("react");
const Home = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../../pages/Home'))));
const Pricing = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../pricing'))));
const ProductModal = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../ProductModal'))));
const LoginModal = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../LoginModal'))));
const Gallery = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../ImageGallery'))));
const Testimonial = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../testimonialProduct'))));
const SignUp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../SignUp'))));
//@ts-ignore
const Account = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../../pages/Account'))));
const FriendProfiles = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../../pages/profiles'))));
const useRoutes = () => {
    const { user } = (0, Auth_1.UserAuth)();
    let routeArray = [
        {
            path: '/',
            element: (React.createElement(React.Suspense, null,
                React.createElement(Home, null))),
            key: '/'
        },
        {
            path: '/pricing',
            element: (React.createElement(React.Suspense, null,
                React.createElement(Pricing, null))),
            key: '/pricing'
        },
        {
            path: '/productModal',
            element: (React.createElement(React.Suspense, null,
                React.createElement(ProductModal, null))),
            key: '/productModal'
        },
        {
            path: '/login',
            element: (React.createElement(React.Suspense, null,
                React.createElement(LoginModal, null))),
            key: '/login'
        },
        {
            path: '/product',
            element: (React.createElement(React.Suspense, null,
                React.createElement(Gallery, null))),
            key: '/product'
        },
        {
            path: '/signup',
            element: (React.createElement(React.Suspense, null,
                React.createElement(SignUp, null))),
            key: '/signup'
        }
    ];
    if (user) {
        let userArray = [
            {
                path: '/account',
                element: (React.createElement(React.Suspense, null,
                    React.createElement(Account, null))),
                key: '/account'
            },
            {
                path: '/friends',
                element: (React.createElement(React.Suspense, null,
                    React.createElement(FriendProfiles, null))),
                key: '/friends'
            }
        ];
        let newArray = routeArray.concat(userArray);
        return newArray;
    }
    return routeArray;
};
exports.default = useRoutes;
