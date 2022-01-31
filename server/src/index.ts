import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes';
import coockieSession from 'cookie-session';

class Server {
    app = express();

    constructor() {
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(coockieSession({ keys: ['asfadsfadfs'] }))
        this.app.use(router)
    }

    start(): void {
        //Прослушивание порта
        this.app.listen(8080, () => {
            console.log('Listening on port 8080');
        })
    }
}
new Server().start();
