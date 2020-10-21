/*
 * @Descripttion: 
 * @version: 
 * @Author: 刘冰见
 * @Date: 2020-10-20 14:19:27
 * @LastEditors: 刘冰见
 * @LastEditTime: 2020-10-20 14:22:24
 */
const path = require('path')
process.chdir(path.join(__dirname, 'smoke/template'))

describe('builder-webpack test dev', () => {
    require('./unit/webpack-base-test')
})