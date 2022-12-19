import {createReadStream, createWriteStream} from "node:fs";
import {pipeline} from "stream/promises";
import {makeCorrectPath} from "../../Utils/utils.js";


export async function cpCommand(params){
    const pathToOldFile = await makeCorrectPath(params[1]);
    const pathToNewFile = await makeCorrectPath(params[2]);
    const readStream = createReadStream(pathToOldFile);
    const writeStream = createWriteStream(pathToNewFile);
    await pipeline(readStream, writeStream)
}