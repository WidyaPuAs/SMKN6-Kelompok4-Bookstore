import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUser = async(req, res) => {
    try {
        const response = await User.findAll({
            attributes: ['uuid', 'username', 'email', 'role']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            attributes: ['uuid', 'username', 'email', 'role'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUser = async(req, res) => {
    const {username, email, password, confPassword, role} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan ConfPassword tidak cocok"})
    const hashPassword = await argon2.hash(password)
    try {
        await User.create({
            username: username,
            email: email,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg: "Register Berhasil"})
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateUser = async(req, res) => {
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User Tidak Ditemukan"});
    const {username, email, password, confPassword, role} = req.body;
    let hashPassword;
    if(password === "" || password === null) {
        hashPassword = user.password
    } else {
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password dan ConfPassword tidak cocok"})
    try {
        await User.update({
            username: username,
            email: email,
            password: hashPassword,
            role: role
        }, {
            where: {
                id: user.id
            }
        });
        res.status(200).json({msg: "User Berhasil Di Update"})
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteUser = async(req, res) => {
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User Tidak Ditemukan"});
    try {
        await User.destroy({
            where: {
                id: user.id
            }
        });
        res.status(200).json({msg: "User Berhasil Di Hapus Mampus"})
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}