import assert from 'assert'
import 'mocha'
import { getCurrentPath } from '../../helper/path.js'

export default () => {
    describe('Helper-path', () => {
        describe('getCurrentPath', () => {
            it('Return current path', () => {
                assert(getCurrentPath() === process.cwd())
            })
        })
    })
}
