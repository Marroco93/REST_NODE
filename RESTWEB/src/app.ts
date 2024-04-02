import { envs } from "./config/envs";
import { Approutes } from "./presentation/routes";
import { Server } from "./presentation/sever";



(async()=>{
    console.log("here");
    main();
})();

function main(){
    console.log('main');

    console.log(envs.PORT);

    const server= new Server({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH,
        routes:Approutes.routes
    });
    server.start();
}