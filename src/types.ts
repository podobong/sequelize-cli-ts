import { Argv, Arguments } from 'yargs'

interface CommandParam {
    command: string,
    description: string,
    builder: (yargs: Argv) => Argv,
    handler: (argv: Arguments) => void,
}

type CommandParams = Array<CommandParam>

interface DBInfo {
    dialect: string,
    host: string,
    username: string,
    password: string | null,
    database: string,
}

interface DBConfig {
    development: DBInfo,
    test: DBInfo,
    production: DBInfo,
}

export { CommandParam, CommandParams, DBInfo, DBConfig }
