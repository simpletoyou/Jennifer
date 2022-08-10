<!--
 * @Description: 
 * @version: 
 * @Author: chenchuhua
 * @Date: 2021-05-12 15:16:53
 * @LastEditors: chenchuhua 3361694095@qq.com
 * @LastEditTime: 2022-08-10 09:39:19
-->
# img v-for拿不到图片
    img: require("../assets/banner/banner9.jpg")

# svg 动画

# css 
    border-sizing: border-box; 将边框绘制在指定宽高容器之内
# div内图片下方存在空白像素
    1.display:block
    2.vertical-align:middle
    3.设置小值行高
    4.设置小值font-size

# css规范
body,p,h1,h2,h3,h4,h5,h6{margin:0;}
ul,ol{list-type:none; margin:0; padding:0;}

# Vue全局变量之prototype（原型属性）
    1. 直接定义：Vue.prototype.a=1
    2. import-export引入导出变量
        1). 新建js文件，定义变量及数值后export
        2). 在main.js文件import上述js文件
            import datas from '../src/json/datas'
Vue.prototype.$datas = datas
            则定义了全局变量datas
    3. 在vue文件中，使用this.a或者this.$datas即可

    
# 箭头函数()=>{}与function的区别
    1. this的指向：使用function定义的函数，this的指向随着调用环境的变化而变化，而箭头函数中的this指向是固定不变的，一直指向定义函数的环境
    2. 由于js的内存机制，function的级别最高，而用箭头函数定义函数的时候，需要var（let const定义的时候更不必说）关键词，而var所定义的变量不能得到变量提升，故箭头函数一定要定义于调用之前
    3. 详见百度

# vue2.x使用代理解决接口请求跨域
    1. 打开项目根目录下config -> index.js文件
    2. 修改配置proxyTable中的内容
        proxyTable: {
        "/service": {
            // 把 localhost:8080 代理为下面的地址
            target: "https://music.163.com",
            secure: true, // 如果是https，需要配置true
            changeOrigin: true, // 是否跨域
            pathRewrite: {   // 重写，如果开发环境地址中不需要service，那么可以将其重写为''
            "^/service": ""
            }
        }
        // 想要代理的地址：'localhost:8080/service/api/playlist/detail?id=19723756'
        // 代理后的地址 'https://music.163.com/service/api/playlist/detail?id=19723756'
        },
    3. vue文件中axios请求接口写法
        async getList(num = 19723756) {
            return new Promise((resolve, reject) => {
            axios.get(`/service/api/playlist/detail?id=${num}`)
                .then(({
                data
                }) => {
                resolve(data)
                })
                .catch(console.error)
            })
        },

# CSS命名规范--BEM
    1. BEM的意思就是块（block）、元素（element）、修饰符（modifier）,是由Yandex团队提出的一种前端命名方法论。
        1) 使用混合拆分样式
        2) 保持选择器扁平和低权重
        3) 适时使用嵌套选择器
        4) 开放封闭原则
    2. 命名约定的模式如下：
        .block{} //.block 代表了更高级别的抽象或组件。
        .block__element{} //.block__element 代表.block的后代，用于形成一个完整的.block的整体。
        .block--modifier{} //.block--modifier代表.block的不同状态或不同版本。
    3. bad: 
        <div class="media">
            <img src="logo.png" alt="Foo Corp logo" class="img-rev">
            <div class="body">
                <h3 class="alpha">Welcome to Foo Corp</h3>
                <p class="lede">Foo Corp is the best, seriously!</p>
            </div>
        </div>
       good: 
        <div class="media">
        <img src="logo.png" alt="Foo Corp logo" class="media__img--rev">
        <div class="media__body">
            <h3 class="alpha">Welcome to Foo Corp</h3>
            <p class="lede">Foo Corp is the best, seriously!</p>
        </div>
        </div> 
# html5 语义元素
    header nav section article aside footer details summary

# vue引入ttf
    1. 下载ttf文件
    2. 新建font文件夹存放ttf，创建font.css
        ```
            @font-face {
                font-family: 'mk';
                src: url(./mk.otf);
            }

            @font-face {
                font-family: 'ssr';
                src: url(./ssr.ttf);
            }
        ```
    3. 在main.js引入font.css
        ```
            import '../src/common/font/font.css'
        ```
    4. css中即可使用
        font-family: 'mk';