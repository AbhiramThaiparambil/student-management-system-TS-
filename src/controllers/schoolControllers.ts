import { Request,Response } from "express";

const homeRoute = async (req:Request,res:Response): Promise<void> => {
    res.render('index')
};

export default {
    homeRoute
};
