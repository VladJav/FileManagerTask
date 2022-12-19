import {createReadStream, createWriteStream} from "node:fs";
import {makeCorrectPath} from "../../Utils/utils.js";
import {createGunzip} from "node:zlib";
import {pipeline} from "stream/promises";

export async function decompressCommand(params){
    const readStream = createReadStream(await makeCorrectPath(params[1]))
    const writeStream = createWriteStream(await makeCorrectPath(params[2]))
    const gunzip = createGunzip();
    await pipeline(readStream,gunzip,writeStream)
}