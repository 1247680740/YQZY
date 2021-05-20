const { gameDeploy } = require('17zy_jxyw_game_deploy')
const path = require('path')

const configPath = path.resolve(__dirname, 'config.js')

gameDeploy(configPath)
