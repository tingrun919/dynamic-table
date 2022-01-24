import type { App } from 'vue';
import './style/index.less';
// import 'virtual:windi.css'

import IdoTable from './ido-table';
const components = [IdoTable];

const install = (app: App) => {
  components.forEach(Component => {
    app.use(Component.install)
  })
  return app;
}

export {
  install,
  IdoTable,
}

export default {
  install
}