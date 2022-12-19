import {createReadStream} from "node:fs";
import {makeCorrectPath} from "../../Utils/utils.js";

export async function catCommand(path){
    const readStream = createReadStream(await makeCorrectPath(path[1]),"utf-8");
    readStream.on('data',(chunk)=>{
        console.log(chunk)
    })
}