<!--
 * @Author: chenchuhua 3361694095@qq.com
 * @Date: 2022-08-09 14:51:41
 * @LastEditors: chenchuhua 3361694095@qq.com
 * @LastEditTime: 2022-08-09 14:51:52
 * @FilePath: \Jennifer\cssdoodle.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<css-doodle grid="20x20">
    :doodle {
        @size: 100vw 100vmin;

    }
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: hsl(@rn(1, 255, 3), @rn(50%, 90%), @rn(70%, 90%));
    animation: move 50s infinite @r(-10, 0)s linear alternate;
    transform: rotate(@rn(720deg)) translate3d(@r(-50, 50)vmin, @r(-50, 50)vmin, @r(-1000, 0)px);
    zoom: @r(.1, 5, 3);
    box-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 10px #fff;
    @keyframes move {
        100% {
            transform: rotate(0) translate3d(0, 0, 0);
        }
    }
</css-doodle>



html,
body {
    position: relative;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #000;
    cursor: pointer;
    // animation: change 10s linear infinite;
}

