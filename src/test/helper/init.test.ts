import * as fs from 'fs'
import assert from 'assert'
import * as path from 'path'
import { getCurrentPath } from '../../helper/path.js'
import { dirOrFileExists, createConfig, deleteConfig } from '../../helper/init.js'
import config from '../../template/config.js'

export default () => {
    describe('Helper-init', () => {
        describe('dirOrFileExists', () => {
            it('Return true when existed', async () => {
                assert(dirOrFileExists(getCurrentPath(), 'node_modules'))
                assert(dirOrFileExists(getCurrentPath(), '.gitignore'))
            })
            it('Return false when not existed', async () => {
                assert(!dirOrFileExists(getCurrentPath(), 'venv'))
                assert(!dirOrFileExists(getCurrentPath(), 'requirements.txt'))
            })
        })
        describe('createConfig', () => {
            it('Config files are created', () => {
                process.chdir('./testdir')
                assert(getCurrentPath() === process.cwd())
                createConfig().then(() => {
                    assert(dirOrFileExists(getCurrentPath(), 'config'))
                    assert(dirOrFileExists(path.join(getCurrentPath(), 'config'), 'config.json'))
                    const data = fs.readFileSync(path.join(getCurrentPath(), 'config', 'config.json'))
                    assert(JSON.stringify(config, undefined, 4) === data.toString())
                })
            })
        })
        describe('deleteConfig', () => {
            it('Config files are deleted', () => {
                deleteConfig().then(() => {
                    assert(!dirOrFileExists(getCurrentPath(), 'config'))
                    process.chdir('../')
                })
            })
        })
    })
}
