import {makeCorrectPath} from "../Utils/utils.js";
import {readFile} from "node:fs/promises";
import {createHash} from "node:crypto";

export async function hashCommand(path){
    const correctPath = await makeCorrectPath(path)
    const fileBuffer = await readFile(correctPath);
    const hashSum = createHash('sha256').update(fileBuffer).digest("hex");
    console.log("Hash: " + hashSum)
}