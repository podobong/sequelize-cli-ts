#!/usr/bin/env node
import yargs from 'yargs'
import { addCommands } from './core/myYargs.js'
import initOptions from './command/init.js'

let y
y = addCommands(yargs, initOptions)
y.argv
