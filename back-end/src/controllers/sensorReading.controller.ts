import { createSensorReadingTableService, getAllSensorReadingService, insertSensorReadingService, updateSensorReadingService, 
    deleteSensorReadingByIDService } from "../services";
import { Request, Response, NextFunction } from "express";
import { CustomError } from "../middlewares";
import { sensorReadingInterface } from "../models";
import { sensorReadingSchema } from "../utils";


export const tmplate = async (req: Request, res: Response, next: NextFunction) =>{
    try
    {

    }
    catch(err)
    {
        next(err);
    }
}

export const createSensorReadingTable = async (req: Request, res: Response, next: NextFunction) =>{
    try
    {
        const result = await createSensorReadingTableService();
        if(!result) throw new CustomError("Internal database error", 500, "ERROR"); 
        res.status(201).json({message: "Table created"});
    }
    catch(err)
    {
        next(err);
    }
}

export const getAllSensorReading = async (req: Request, res: Response, next: NextFunction) =>{
    try
    {
        const result = await getAllSensorReadingService();
        if(!result) throw new CustomError("Internal database error", 500, "ERROR"); 
        res.status(200).json(result);
    }
    catch(err)
    {
        next(err);
    }
}

export const insertSensorReading = async (req: Request, res: Response, next: NextFunction) =>{
    try
    {
        const data = req.body;
        const {error, value} = sensorReadingSchema.validate(data);
        if(error) throw new CustomError(error.message, 400, "BAD REQUEST");
        const result = insertSensorReadingService(data);
        if(!result) throw new CustomError("Internal database error", 500, "ERROR"); 
        res.status(201).json(result);
    }
    catch(err)
    {
        next(err);
    }
}