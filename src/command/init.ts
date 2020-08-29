import { Argv, Arguments } from 'yargs'
import { CommandParams } from '../core/my-yargs.js'
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
    configHandler(argv)
    modelsHandler(argv)
}

function configHandler(argv: Arguments) {
    if (typeof(argv.force) === 'boolean') {
        if (argv.force) {
            helper.deleteConfig()
        }
        if (!helper.dirOrFileExists(getCurrentPath(), 'config')) {
            helper.createConfig()
        }
    }
}

function modelsHandler(argv: Arguments) {

}

export default options
