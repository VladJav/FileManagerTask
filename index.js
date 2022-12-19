
import { rm } from 'node:fs/promises';
import {cpCommand} from "./Commands/FilesCommands/cpCommand.js";
import {currentDir} from "./Utils/utils.js";
import {hashCommand} from "./Commands/hashCommand.js";
import {osCommand} from "./Commands/osCommand.js";
import {mvCommand} from "./Commands/FilesCommands/mvCommand.js";
import {catCommand} from "./Commands/FilesCommands/catCommand.js";
import {lsCommand} from "./Commands/DirectoryOperations/lsCommand.js";
import {cdCommand} from "./Commands/DirectoryOperations/cdCommand.js";
import {upCommand} from "./Commands/DirectoryOperations/upCommand.js";
import {compressCommand} from "./Commands/ZipCommands/compressCommand.js";
import {decompressCommand} from "./Commands/ZipCommands/decompressCommand.js";
import {rmCommand} from "./Commands/FilesCommands/rmCommand.js";
import {addCommand} from "./Commands/FilesCommands/addCommand.js";
import {rnCommand} from "./Commands/FilesCommands/rnCommand.js";

const username = process.argv[2].split("=")[1]


console.log(`Welcome to the File Manager, ${username}!`)
console.log("You are currently in "+currentDir)

process.stdin.on('data',start)

process.on("exit",()=>{
    console.log(`Thank you for using File Manager, ${username}, goodbye!`)
})
process.on('SIGINT', () => {
    process.exit()
});
async function start(chunk){
    let command = chunk.toString().split("\r")[0];
    let params = command.split(" ");
    try{
        if(command === "ls"){
            await lsCommand()
        }
        else if(command.startsWith("cd")){
            await cdCommand(params)
        }
        else if (command === "up"){
            await upCommand()
        }
        else if(command.startsWith("os")){
            osCommand(params)
        }
        else if(command.startsWith("hash")){
            await hashCommand(params[1])
        }
        else if(command.startsWith("compress")){
            await compressCommand(params)
        }
        else if(command.startsWith("decompress")){
            await decompressCommand(params)
        }
        else if(command.startsWith("rm")){
            await rmCommand(params)
        }
        else if(command.startsWith("add")){
            addCommand(params)
        }
        else if(command.startsWith("rn")){
            await rnCommand(params)
        }
        else if(command.startsWith("cat")){
            await catCommand(params)
        }
        else if(command.startsWith("mv")){
            await mvCommand(params)
        }
        else if(command.startsWith("cp")){
            await cpCommand(params)
        }
        else if(command === ".exit"){
            process.exit()
        }
        else{
            console.log("Invalid input")
        }
    }
    catch (e){
        console.log(e)
    }
    console.log(currentDir)
}