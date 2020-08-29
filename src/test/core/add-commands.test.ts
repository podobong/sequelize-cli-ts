import yargs from 'yargs'
import { addCommands } from '../../core/my-yargs.js'

addCommands(yargs, [
    {
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
    },
    {
        command: 'ia',
        description: 'ia -area on the planetes-',
        builder: (yargs) => {
            return yargs.option('kagerou', {
                alias: 'k',
                type: 'boolean',
                default: 'false',
            })
        },
        handler: (argv) => {
            console.log(`ia: kagerou=${argv.kagerou}`)
        }
    }
]).argv
