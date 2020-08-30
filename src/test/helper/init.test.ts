import * as fs from 'fs'
import assert from 'assert'
import * as path from 'path'
import { getCurrentPath } from '../../helper/path.js'
import { dirOrFileExists, createConfig, deleteDir, createModels } from '../../helper/init.js'
import config from '../../template/config/config.js'
import modelIndex from '../../template/models/index.js'

export default () => {
    describe('Helper-init', () => {
        describe('dirOrFileExists', () => {
            it('Return true when existed', async () => {
                assert(dirOrFileExists(getCurrentPath(), 'folder'))
                assert(dirOrFileExists(getCurrentPath(), 'file.txt'))
            })
            it('Return false when not existed', async () => {
                assert(!dirOrFileExists(getCurrentPath(), 'asdf'))
                assert(!dirOrFileExists(getCurrentPath(), 'asdf.txt'))
            })
        })
        describe('createConfig', () => {
            it('Config files are created', async () => {
                await createConfig()
                assert(dirOrFileExists(getCurrentPath(), 'config'))
                assert(dirOrFileExists(path.join(getCurrentPath(), 'config'), 'config.json'))
                const data = fs.readFileSync(path.join(getCurrentPath(), 'config', 'config.json'))
                assert(JSON.stringify(config, undefined, 4) + '\n' === data.toString())
            })
        })
        describe('createModels', () => {
            it('Model files are created', async () => {
                await createModels()
                assert(dirOrFileExists(getCurrentPath(), 'models'))
                assert(dirOrFileExists(path.join(getCurrentPath(), 'models'), 'index.ts'))
                const data = fs.readFileSync(path.join(getCurrentPath(), 'models', 'index.ts'))
                assert(modelIndex === data.toString())
            })
        })
        describe('deleteDir', () => {
            it('Created files are deleted', async () => {
                await deleteDir(path.join(getCurrentPath(), 'config'))
                await deleteDir(path.join(getCurrentPath(), 'models'))
                assert(!dirOrFileExists(getCurrentPath(), 'config'))
                assert(!dirOrFileExists(getCurrentPath(), 'models'))
            })
        })
    })
}
