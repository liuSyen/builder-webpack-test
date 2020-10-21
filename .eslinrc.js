/*
 * @Descripttion: 
 * @version: 
 * @Author: 刘冰见
 * @Date: 2020-10-20 11:17:47
 * @LastEditors: 刘冰见
 * @LastEditTime: 2020-10-20 11:50:26
 */
const { ModuleFilenameHelpers } = require("webpack");

module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "node": true
    }
}