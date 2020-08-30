import * as path from 'path'
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
        try {
            await configHandler(argv)
            modelsHandler(argv)
        } catch (error) {
            reject(error)
        }
        resolve()
    })
}

function configHandler(argv: Arguments) {
    return new Promise<void>(async (resolve, reject) => {
        if (typeof(argv.force) === 'boolean') {
            if (helper.dirOrFileExists(getCurrentPath(), 'config')) {
                if (argv.force) {
                    await helper.deleteDir(path.join(getCurrentPath(), 'config'))
                } else {
                    console.log('A folder named "config" already exists.')
                    resolve()
                }
            }
            await helper.createConfig()
            resolve()
        }
        reject('Invalid argument type')
    })
}

function modelsHandler(argv: Arguments) {
    return new Promise<void>(async (resolve, reject) => {
        if (typeof(argv.force) === 'boolean') {
            if (helper.dirOrFileExists(getCurrentPath(), 'models')) {
                if (argv.force) {
                    await helper.deleteDir(path.join(getCurrentPath(), 'models'))
                } else {
                    console.log('A folder named "models" already exists.')
                    resolve()
                }
            }
            await helper.createModels()
            resolve()
        }
        reject('Invalid argument type')
    })
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
