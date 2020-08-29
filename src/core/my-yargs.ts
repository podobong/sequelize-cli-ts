import { Argv, Arguments } from 'yargs'

interface CommandParam {
    command: string,
    description: string,
    builder: (yargs: Argv) => Argv,
    handler: (argv: Arguments) => void,
}

type CommandParams = Array<CommandParam>

function addCommand(yargs: Argv, param: CommandParam) {
    return yargs.command(param.command, param.description, param.builder, param.handler)
}

function addCommands(yargs: Argv, params: CommandParams) {
    params.forEach((param) => {
        yargs = addCommand(yargs, param)
    })
    return yargs
}

export { CommandParams, addCommand, addCommands }
