/*
 * @Descripttion: 
 * @version: 
 * @Author: 刘冰见
 * @Date: 2020-10-20 13:58:01
 * @LastEditors: 刘冰见
 * @LastEditTime: 2020-10-20 14:08:56
 */
const glob = require('glob-all')

describe('Checking generated html files', () => {
    it('should generate html files', (done) => {
        const files = glob.sync([
            './dist/index.html',
            './dist/search.html'
        ])
        if (files.length > 0) {
            done()
        } else {
            throw new Error('no html files')
        }
    })
})