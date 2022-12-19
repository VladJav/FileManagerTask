import {homedir} from "node:os";
import {isAbsolute, resolve} from "node:path";

export let currentDir = homedir();

export function setCurrentDir(path){
    currentDir = path;
}

export async function makeCorrectPath(path){
    if(isAbsolute(path)){
        if(path.startsWith("/") || path.startsWith("\\")){
            return `${currentDir[0]}:/${path}`
        }
        else {
            return path;
        }
    }
    else {
        return resolve(currentDir, path);
    }
}