import * as fs from 'fs'
import * as path from 'path'
import rimraf from 'rimraf'
import { getCurrentPath } from './path.js'
import config from '../template/config.js'

function deleteConfig() {
    return new Promise<void>((resolve, reject) => {
        rimraf(path.join(getCurrentPath(), 'config'), (error) => {
            if (error) { reject(error) }
            resolve()
        })
    })
}

function createConfig() {
    return new Promise<void>((resolve, reject) => {
        const configPath = path.join(getCurrentPath(), 'config')
        fs.mkdir(configPath, (error) => {
            if (error) { reject(error) }
            fs.writeFile(
                path.join(configPath, 'config.json'),
                JSON.stringify(config, undefined, 4) + '\n',
                (error) => {
                    if (error) { reject(error) }
                    resolve()
                },
            )
        })
    })
}

function dirOrFileExists(path: string, name: string) {
    if (fs.readdirSync(path).includes(name)) {
        return true
    }
    return false
}

export { deleteConfig, createConfig, dirOrFileExists }
