import {makeCorrectPath} from "../../Utils/utils.js";
import {rename} from "node:fs/promises";
import {dirname} from "node:path";

export async function rnCommand(params){
    const correctPath = await makeCorrectPath(params[1])
    await rename(correctPath, dirname(correctPath)+"/"+params[2])
}