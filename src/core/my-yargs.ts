import { Argv } from 'yargs'
import { CommandParam, CommandParams } from '../types'

function addCommand(yargs: Argv, param: CommandParam) {
    return yargs.command(param.command, param.description, param.builder, param.handler)
}

function addCommands(yargs: Argv, params: CommandParams) {
    params.forEach((param) => {
        yargs = addCommand(yargs, param)
    })
    return yargs
}

export { addCommand, addCommands }
