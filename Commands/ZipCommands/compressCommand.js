import {createReadStream, createWriteStream} from "node:fs";
import {makeCorrectPath} from "../../Utils/utils.js";
import {createGzip} from "node:zlib";
import {pipeline} from "stream/promises";

export async function compressCommand(params){
    const readStream = createReadStream(await makeCorrectPath(params[1]))
    const writeStream = createWriteStream(await makeCorrectPath(params[2]))
    const gzip = createGzip();
    await pipeline(readStream,gzip,writeStream)
}