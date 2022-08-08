<!--
 * @Description: 
 * @version: 
 * @Author: chenchuhua
 * @Date: 2021-04-22 14:26:50
 * @LastEditors: chenchuhua 3361694095@qq.com
 * @LastEditTime: 2022-08-08 11:09:16
-->
# 书书

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# create a new vue project

# run the project
    npm run dev
# install some necessary dependencies


# install less
    cnpm install less less-loader@5.0.0 --save

    # Wrong：Module build failed: TypeError: this.getOptions is not a function
    # Solution: degrade the less-loader version to 5.0.0
        cnpm uninstall less-loader
        cnpm install less-loader@5.0.0

# Wrong: repeat Router
# Solution: upgrade the vue-router version to 3.0
    cnpm i vue-router@3.0 -S
