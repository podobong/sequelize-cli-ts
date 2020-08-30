import assert from 'assert'
import { getCurrentPath } from '../../helper/path.js'

export default () => {
    describe('Helper-path', () => {
        describe('getCurrentPath', () => {
            it('Return current path', async () => {
                assert(getCurrentPath() === process.cwd())
            })
        })
    })
}
