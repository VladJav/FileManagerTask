import {makeCorrectPath} from "../../Utils/utils.js";
import {rename} from "node:fs/promises";

export async function mvCommand(params){
    const pathToOldFile = await makeCorrectPath(params[1]);
    const pathToNewFile = await makeCorrectPath(params[2]);
    await rename(pathToOldFile,pathToNewFile);
}