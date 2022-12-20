import download from 'download-git-repo'
import { frameworkUrl } from '../../confg.mjs'
import ora from 'ora'
import chalk from 'chalk'

export default function downloadTem(project, answer) {
  const spinner = ora()
  spinner.text = 'cloning...'
  spinner.start()
  download(`direct:${frameworkUrl[answer.framework]}`, project, { clone: true }, (err) => {
    if (err) {
      spinner.fail('clone failed')
      console.error(err);
    } else {
      console.clear()
      spinner.succeed(chalk.green.bold('clone success! \n'))
      console.log('cd ' + project + '\n');
      console.log('npm install \n');
      console.log('npm run dev \n');
    }
  })
}