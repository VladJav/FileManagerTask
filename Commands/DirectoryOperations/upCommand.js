import {dirname} from "node:path";
import {currentDir, setCurrentDir} from "../../Utils/utils.js";
import {access, constants} from "node:fs/promises";

export async function upCommand(){
    let newPath = dirname(currentDir)
    await access(newPath,constants.F_OK);
    setCurrentDir(newPath);
}