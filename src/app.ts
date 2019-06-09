import express, {Application} from 'express';
import morgan from 'morgan'; 



// Routes
import IndexRoute from  './routes/index.routes';
import PostsRoutes from  './routes/post.routes';

export class App {

   private  app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(IndexRoute);
        this.app.use('/posts', PostsRoutes);
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('server on port', this.app.get('port'));
        
    }

}