import { get } from "./routes";
import {Router, Request,Response, NextFunction } from "express";
import 'reflect-metadata'
import express from 'express'
import { controller } from "./controller";
import { useActionData } from "react-router-dom";
import {use} from './use'

function logger(req: Request, res: Response, next: NextFunction) {
    console.log("Request was made!!!");
    next()
}

@controller('/auth')
class LoginController {
    @get('/login')
    @use(logger)
    getLogin(req: Request, res: Response): void {
        res.send(`<form method="Post">
                    <div>
                        <label>Email</label>
                        <input name="email"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input name="password" type="password"
                    </div>
                    <button>Submit</button>
                    </form>`);
    }
}