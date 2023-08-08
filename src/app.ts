import express, { Application } from 'express';
import { connect } from './Infra/database';

class App{
    public app: Application;
    constructor(){
        this.app = express();
        this.middlewaresInitialize();
        this.initializeRoutes();
        this.interceptionError();
        connect();
    }

    initializeRoutes(){
        //this.app.use('/',)
    }

    interceptionError(){
        //this.app.use()
    }

    middlewaresInitialize(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    listen(){
        this.app.listen(3333, () => console.log('Server is running'));
    }
}
export{App};