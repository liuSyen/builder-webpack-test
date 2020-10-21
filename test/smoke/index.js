/*
 * @Descripttion: 
 * @version: 
 * @Author: 刘冰见
 * @Date: 2020-10-20 13:49:20
 * @LastEditors: 刘冰见
 * @LastEditTime: 2020-10-20 14:07:08
 */
const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')
const mocha = require('mocha')
// 进入当前路径
process.chdir(path.join(__dirname, 'template'))

const mocha = new mocha({
    timeout: '100000ms'
})

rimraf('./dist', () => {
    const prodConfig = require('../../lib/webpack.prod')

    webpack(prodConfig, (err, stats) => {
        if (err) {
            console.log(err)
            process.exit(2)
        }
        console.log(stats.toString({
            color: true,
            modules: false
        }))
    })
    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.run();
})