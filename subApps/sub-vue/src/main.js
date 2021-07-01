import Vue from "vue";
import VueRouter from "vue-router";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

import App from "./App.vue";
import "./public-path";
import routes from "./router";
// import routes from "./krouter";
import store from "./store";

Vue.use(VueRouter);

Vue.config.productionTip = false;

//全局注册通用组件
const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

let router = null;
let instance = null;

function render(props = {}) {
  const {container} = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/vue/" : "/",
    mode: "history",
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function storeTest(props) {
  props.onGlobalStateChange &&
  props.onGlobalStateChange(
    (value, prev) =>
      console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
    true
  );
  props.setGlobalState &&
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log("[vue] props from main framework", props);
  storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
