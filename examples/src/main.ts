import { createApp } from 'vue'
import App from './App.vue'


import { IdoTable } from '../../packages/index';

// 设置当前环境
// window.env = import.meta.env.MODE === "development" ? "dev" : "pro";

/*
dev mode
1、生产环境使用已发布的样式文件，参考 theme-switch-mixins.js
*/

// if (window.env === "dev") {
    import("../../packages/style/index.less");
// }


const app = createApp(App);
app.use(IdoTable).mount('#app')