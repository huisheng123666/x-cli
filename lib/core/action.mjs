import inquirer from 'inquirer';
import { framework, frameworkUrl } from '../../confg.mjs'
import download from './download.mjs'

const myAction = async (project, args) => {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'framework',
            choices: framework,
            message: '请选择你使用的框架'
        }
    ])
    download(project, answer)
}

export default myAction