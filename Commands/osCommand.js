import {arch, cpus, EOL, homedir, userInfo} from "node:os";

export function osCommand(params){
    switch (params[1]){
        case "--cpus":
            console.log("CPUs amount: "+ cpus().length)
            cpus().forEach((e)=>{
                console.log("Model: "+ e.model);
                console.log("Clock rate: "+ e.speed)
            })
            break;
        case "--homedir":
            console.log(homedir())
            break;
        case "--username":
            console.log(userInfo().username)
            break;
        case "--EOL":
            console.log([EOL])
            break;
        case "--architecture":
            console.log(arch())
    }
}