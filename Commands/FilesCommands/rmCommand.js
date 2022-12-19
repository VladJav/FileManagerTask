import {rm} from "node:fs/promises";
import {makeCorrectPath} from "../../Utils/utils.js";

export async function rmCommand(path){
    await rm(await makeCorrectPath(path[1]))
    console.log("REMOVED!")
}