# echarts-demo
----

show different demos made by echarts.


# 项目构建过程中遇到的问题
    ### antd
        问题: `npm install antd --save-dev`之后，`import { Tooltip } from 'antd' `，编译后没有加载相应的样式。
        解决: 阅读antd文档，使用推荐的`babel-plugin-import`来加载引入。
        [推荐方式](https://ant.design/docs/react/introduce-cn)
          引发问题：`bundle.js:18070 ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/an...`，如果在构建了node-sass之后，转换了node版本，那么基于之前的node版本构建的node-sass就无法正常运行，需要基于当前的node版本进行重新构建。
            解决: `npm rebuild node-sass`,之后`npm start`正常运行。
            相似问题看这里，很多人都遇到了这个问题，但是通过不同的方式都解决了。
            [相似问题](https://github.com/webpack-contrib/css-loader/issues/240)