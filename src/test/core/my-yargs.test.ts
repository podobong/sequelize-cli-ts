import assert from 'assert'
import { exec } from 'child_process'

export default () => {
    describe('Core-myyargs', () => {
        describe('addCommand', () => {
            it('Create a command', () => {
                exec('node ./build/test/core/add-command.test.js miku', (error, stdout, stderr) => {
                    assert(stdout.includes('miku: sing=false'))
                })
                exec('node ./build/test/core/add-command.test.js miku -s', (error, stdout, stderr) => {
                    assert(stdout.includes('miku: sing=true'))
                })
                exec('node ./build/test/core/add-command.test.js miku --sing', (error, stdout, stderr) => {
                    assert(stdout.includes('miku: sing=true'))
                })
            })
        })
        describe('addCommands', () => {
            it('Create multiple commands', () => {
                exec('node ./build/test/core/add-commands.test.js ia', (error, stdout, stderr) => {
                    assert(stdout.includes('ia: kagerou=false'))
                })
                exec('node ./build/test/core/add-commands.test.js ia -k', (error, stdout, stderr) => {
                    assert(stdout.includes('ia: kagerou=true'))
                })
                exec('node ./build/test/core/add-commands.test.js ia --kagerou', (error, stdout, stderr) => {
                    assert(stdout.includes('ia: kagerou=true'))
                })
            })
        })
    })
}
