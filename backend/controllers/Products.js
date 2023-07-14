import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getProduct = async (req, res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await Product.findAll({
                attributes: ['uuid', 'judul_buku', 'harga'],
                include:[{
                    model: User,
                    attributes: ['username', 'email']
                }]
            })
        } else {
            response = await Product.findAll({
                attributes: ['uuid', 'judul_buku', 'harga'],
                where: {
                    UserId: req.userId,
                    attributes: ['username', 'email']
                },
                include:[{
                    model: User
                }]
            })
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductById = async(req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Product Tidak Ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Product.findOne({
                attributes: ['uuid', 'judul_buku', 'harga'],
                where: {
                    id: product.id
                },
                include:[{
                    model: User,
                    attributes: ['username', 'email']
                }]
            })
        } else {
            response = await Product.findOne({
                attributes: ['uuid', 'judul_buku', 'harga'],
                where: {
                    [Op.and]: [{id: product.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes: ['username', 'email']
                }]
            })
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createProduct = async(req, res) => {
    const {judul_buku, harga} = req.body;
    try {
        await Product.create({
            judul_buku: judul_buku,
            harga: harga,
            userId: req.userId
        });
        res.status(201).json({msg: "Product Berhasil Ditambahkan"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateProduct = async(req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Product Tidak Ditemukan"});
        const {judul_buku, harga} = req.body;
        if(req.role === "admin"){
            await Product.update({judul_buku, harga}, {
                where: {
                    id: product.id
                }
            });
        } else {
            if(req.userId !== product.userId) return res.status(403).json({msg: "Akses Terlarang"});
            await Product.update({judul_buku, harga}, {
                where: {
                    [Op.and]: [{id: product.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Produk Berhasil Di Edit"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteProduct = async(req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Product Tidak Ditemukan"});
        const {judul_buku, harga} = req.body;
        if(req.role === "admin"){
            await Product.destroy({
                where: {
                    id: product.id
                }
            });
        } else {
            if(req.userId !== product.userId) return res.status(403).json({msg: "Akses Terlarang"});
            await Product.destroy({
                where: {
                    [Op.and]: [{id: product.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Produk Berhasil Di Hapus"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}