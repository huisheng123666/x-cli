#! /usr/bin/env node

import { program } from 'commander'
import myHelp from '../lib/core/help.mjs'
import myCommander from '../lib/core/mycommander.mjs'

myHelp(program)
myCommander(program)

program.parse(process.argv)