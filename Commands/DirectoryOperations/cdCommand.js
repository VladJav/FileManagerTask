import {currentDir, makeCorrectPath, setCurrentDir} from "../../Utils/utils.js";
import {access, constants} from "node:fs/promises";

export async function cdCommand(params){
    let path = params[1];

    setCurrentDir(await makeCorrectPath(path));
    await access(currentDir,constants.R_OK | constants.W_OK | constants.X_OK)
}