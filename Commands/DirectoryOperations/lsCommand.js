import {lstat, readdir} from "node:fs/promises";
import {currentDir} from "../../Utils/utils.js";

export async function lsCommand(){
    const dirList = await readdir(currentDir);
    let output = []
    for(let dir of dirList){
        let stat = await lstat(`${currentDir}/${dir}`);
        if(stat.isDirectory()) output.push([dir, "directory"])
        else output.push([dir, "file"])
    }
    output.sort((a,b)=>{
        if (a[0] < b[0] ) {
            return -1;
        }
        if (a[0] > b[0] ) {
            return 1;
        }
        return 0;
    })
    output.sort((a, b)=>{
        if (a[1] ==="file" && b[1]==="directory") {
            return 1;
        }
        if (a[1] === "directory" && b[1]==="file") {
            return -1;
        }
        return 0;
    })

    console.table(output.map(e=>{
        return {
            "Name":e[0],
            "Type":e[1]
        }
    }))
}