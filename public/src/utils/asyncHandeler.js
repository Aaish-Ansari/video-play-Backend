import { response } from "express"

const asyncHandeler = (requestHandeler) => {
    Promise.resolve(requestHandeler(req, response, next)).
        catch((err) => next(err))
}




/*
const asyncHandeler = (fn) => async () => {
     try {
        await fn(req ,res , next)
        
     } catch (error) {
        res.status(err.code || 500).json({
            success : false,
            messsage : err.messsage
     })
    }
} 
*/

export {asyncHandeler}