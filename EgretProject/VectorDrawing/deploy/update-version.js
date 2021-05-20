const config = require('../package.json')
const version = config.version
const fs = require('fs')
const childProcess = require('child_process')

const updateVersion = () => {
  const UPDATE_TYPE = {
    MAJOR: 'major',
    MINOR: 'minor',
    PATCH: 'patch'
  }

  let [major, minor, patch] = version.split('.')

  let type = process.argv.slice(2)[0] || UPDATE_TYPE.PATCH
  type = Object.values(UPDATE_TYPE).includes(type) ? type : UPDATE_TYPE.PATCH

  console.log(process.argv)

  if (type === UPDATE_TYPE.PATCH) {
    patch = +patch + 1
  } else if (type === UPDATE_TYPE.MINOR) {
    patch = 0
    minor = +minor + 1
  } else {
    patch = 0
    minor = 0
    major = +major + 1
  }

  const newVersion = [major, minor, patch].join('.')

  config.version = newVersion

  fs.writeFileSync('./package.json', JSON.stringify(config, null, 4))
  fs.writeFileSync('./version.js', `window.version = '${newVersion}'\n`)

  childProcess.exec('git commit -a -m "config: 更新版本号"', { encoding: 'utf-8' }, () => {
    childProcess.exec('git push', { encoding: 'utf-8' }, () => {
      childProcess.exec(`git tag v${newVersion}`, { encoding: 'utf-8' }, () => {
        childProcess.exec(`git push origin v${newVersion}`, { encoding: 'utf-8' })
      })
    })
  })
}

const checkGitStatus = () => {
  return new Promise((resolve, reject) => {
    childProcess.exec('git status', { encoding: 'utf-8' }, (stdout, error) => {
      if (error.includes('not staged')) {
        reject(new Error('有未提交的内容,请先提交'))
      } else {
        resolve()
      }
    })
  })
}

checkGitStatus().then(() => {
  updateVersion()
}).catch(err => {
  console.log(err)
})
