import {Request, Response} from 'express';

const todoHomeController = {
    async todoHome(req:Request, res:Response) {
        try{
            res.render('home/index');
        }catch(err){
            console.log(err);
        }
    }
}

export default todoHomeController;