import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if(!user) return res.status(404).json({msg: "User Tidak Ditemukan"});
    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(400).json({msg: "Password Salah"});
    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const username = user.username;
    const email = user.email;
    const role = user.role;
    res.status(200).json({uuid, username, email, role});
}

export const Me = async (req, res) => {
    if(!req.session.userId) {
        return res.status(401).json({msg: "Mohon Login Ke Akun Anda"})
    }
    const user = await User.findOne({
        attributes: ['uuid', 'username', 'email', 'role'],
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User Tidak Ditemukan"});
    res.status(200).json(user);
}

export const logOut = (req, res) => {
    req.session.destroy((err) => {
        if(err) return res.status(400).json({msg: "Tidak dapat logout"});
        res.status(200).json({msg: "Anda telah logout"})
    });
}