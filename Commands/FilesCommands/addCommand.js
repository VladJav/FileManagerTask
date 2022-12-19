import {createWriteStream} from "node:fs";
import {currentDir} from "../../Utils/utils.js";

export function addCommand(path){
    createWriteStream(currentDir+"\\"+path[1]).end();
}