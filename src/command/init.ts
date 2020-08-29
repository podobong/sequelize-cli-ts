import { Argv, Arguments } from 'yargs'
import { CommandParams } from '../types'
import { getCurrentPath } from '../helper/path.js'
import * as helper from '../helper/init.js'

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
        resolve()
    })
}

function configHandler(argv: Arguments) {
    return new Promise<void>(async (resolve, reject) => {
        if (typeof(argv.force) === 'boolean') {
            if (helper.dirOrFileExists(getCurrentPath(), 'config')) {
                if (argv.force) {
                    await helper.deleteConfig()
                } else {
                    console.log('A folder named "config" already exists.')
                    return
                }
            }
            await helper.createConfig()
            resolve()
        }
        reject()
    })
}

function modelsHandler(argv: Arguments) {

}

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

export default options
