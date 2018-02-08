

export class LogService{

    log(msg : any){
        console.log("LOG: ", msg)
    }

    error(msg : any){
        console.error("ERROR: ",msg)
    }

    warn(msg : any){
        console.warn("WARN: ",msg)
    }

}