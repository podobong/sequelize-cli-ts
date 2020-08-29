import assert from 'assert'
import 'mocha'
import { getCurrentPath } from '../../helper/path.js'
import { dirOrFileExists, createConfig, deleteConfig } from '../../helper/init.js'

export default () => {
    describe('Helper-init', () => {
        describe('dirOrFileExists', () => {
            it('Return true when existed', () => {
                assert(dirOrFileExists(getCurrentPath(), 'node_modules'))
                assert(dirOrFileExists(getCurrentPath(), '.gitignore'))
            })
            it('Return false when not existed', () => {
                assert(!dirOrFileExists(getCurrentPath(), 'venv'))
                assert(!dirOrFileExists(getCurrentPath(), 'requirements.txt'))
            })
        })
        describe('createConfig & deleteConfig', () => {
            it('Config files are created and deleted', () => {
                process.chdir('./testdir')
                createConfig()
                assert(dirOrFileExists(getCurrentPath(), 'config'))
                deleteConfig()
                assert(!dirOrFileExists(getCurrentPath(), 'config'))
                process.chdir('../')
            })
        })
    })
}
