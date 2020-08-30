import * as fs from 'fs'
import * as path from 'path'
import rimraf from 'rimraf'
import { getCurrentPath } from './path.js'
import config from '../template/config/config.js'
import modelIndex from '../template/models/index.js'

function deleteDir(dir: string) {
    return new Promise<void>((resolve, reject) => {
        rimraf(dir, (error) => {
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

function createModels() {
    return new Promise<void>((resolve, reject) => {
        const modelsPath = path.join(getCurrentPath(), 'models')
        fs.mkdir(modelsPath, (error) => {
            if (error) { reject(error) }
            fs.writeFile(
                path.join(modelsPath, 'index.ts'),
                modelIndex,
                (error) => {
                    if (error) { reject(error) }
                    resolve()
                }
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

export { deleteDir, createConfig, createModels, dirOrFileExists }
