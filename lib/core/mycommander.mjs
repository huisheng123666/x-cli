import myAction from './action.mjs'

const myCommander = (program) => {
    program
    .command('create <project> [other...]')
    .alias('crt')
    .description('创建项目')
    .action(myAction)
}

export default myCommander