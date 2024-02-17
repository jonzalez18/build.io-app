
import { Router } from "express"
import express, {Request, Response} from 'express'
import {AppRouter} from './AppRouter'
import { bodyValidator } from "./bodyValidatore"
export const router = AppRouter.getInstance()


router.post('/login', (req: Request, res: Response) => {
    const {email, password} = req.body

    if(email && password && email === 'hi@hi.com' && password === "Password1") {
        req.session = {logginIn: true};
        res.redirect('/');

    } else {
        res.send('Invalid email or password')
    }
})
@post('/login')
@bodyValidator('email', 'password')
postLogin('/login', (req: Request, res: Response) => {
    const {email, password} = req.body

    if(email && password && email === 'hi@hi.com' && password === "Password1") {
        req.session = {logginIn: true};
        res.redirect('/');

    } else {
        res.send('Invalid email or password')
    }
})

 function post(routeName: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        router.post(routeName, target[key])
    }
}

function use(middleware: any) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        router.
    }
}