import * as fs from 'fs'
import * as path from 'path'
import rimraf from 'rimraf'
import { getCurrentPath } from './path.js'

function deleteConfigDir() {
    rimraf.sync('config')
}

function createConfig() {
    fs.mkdirSync(path.join(getCurrentPath(), 'config'))
}

function configDirExists() {
    if (fs.readdirSync(getCurrentPath()).includes('config')) {
        return true
    }
    return false
}

export { deleteConfigDir, createConfig, configDirExists }
