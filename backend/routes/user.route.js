import express from 'express';
import {test} from '../controller/user.controller.js';
import User from '../models/user.model.js';
import bcrypt from "bcryptjs";
const router = express.Router()

router.post("/create", async(req,res) => {
    try {
        const userInformation = req.body;

        const hashedPassword = await bcrypt.hash(req.body.password,10)
        await User.create({
            displayName:req.body.displayName,
            username:req.body.username,
            email:req.body.email,
            hashedPassword:hashedPassword,
        })
        res.json({message: "User created successfully"})
    } catch (error) {
        console.error("Error creating user:", error)
        res.status(500).json({error: "Failed to create user"})
    }
})

router.get("/test",test)

export default router;