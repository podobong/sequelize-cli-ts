import yargs from 'yargs'
import { addCommand } from '../../core/my-yargs.js'

addCommand(yargs, {
    command: 'miku',
    description: 'hastne miku',
    builder: (yargs) => {
        return yargs.option('sing', {
            alias: 's',
            type: 'boolean',
            default: 'false',
        })
    },
    handler: (argv) => {
        console.log(`miku: sing=${argv.sing}`)
    }
}).argv
