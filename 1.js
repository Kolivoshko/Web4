function start(){
    for (let index = 0; index < 7; index++) {
        let log ="";
        for(let i = 1; i <= index+1; i++){
            log += "#";
        }
        console.log(log);
    }
}

start();