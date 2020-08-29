import { Argv, Arguments } from 'yargs'
import { CommandParams } from '../types'
import { getCurrentPath } from '../helper/path.js'
import * as helper from '../helper/init.js'

const options: CommandParams = [
    {
        command: 'init',
        description: 'Initialize sequelize project in current directory',
        builder: builder,
        handler: defaultHandler,
    },
    {
        command: 'init:config',
        description: '(Only Config) Initialize sequelize project in current directory',
        builder: builder,
        handler: configHandler,
    },
    {
        command: 'init:models',
        description: '(Only Models) Initialize sequelize project in current directory',
        builder: builder,
        handler: modelsHandler,
    }
]

function builder(yargs: Argv) {
    return yargs.option('force', {
        description: '',
        alias: 'f',
        type: 'boolean',
        default: false,
    })
}

function defaultHandler(argv: Arguments) {
    return new Promise<void>(async (resolve, reject) => {
        await configHandler(argv)
        modelsHandler(argv)
    })
}

function configHandler(argv: Arguments) {
    return new Promise<void>(async (resolve, reject) => {
        if (typeof(argv.force) === 'boolean') {
            if (argv.force) {
                helper.deleteConfig()
            }
            if (!helper.dirOrFileExists(await getCurrentPath(), 'config')) {
                helper.createConfig()
            }
            resolve()
        }
        reject()
    })
}

function modelsHandler(argv: Arguments) {

}

export default options
