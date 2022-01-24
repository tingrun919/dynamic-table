
import type { App } from 'vue';

import IdoTable from "./src/index";

IdoTable.install = function (app: App) {
  app.component(IdoTable.name, IdoTable);
  return app;
};

export default IdoTable