import * as fs from 'fs'
import * as path from 'path'
import rimraf from 'rimraf'
import { getCurrentPath } from './path.js'

function deleteConfig() {
    rimraf.sync('config')
}

function createConfig() {
    const configPath = path.join(getCurrentPath(), 'config')
    fs.mkdirSync(configPath)
    fs.writeFileSync(path.join(configPath, 'config.json'), '{"config": "test"}')
}

function dirOrFileExists(path: string, name: string) {
    if (fs.readdirSync(path).includes(name)) {
        return true
    }
    return false
}

export { deleteConfig, createConfig, dirOrFileExists }
