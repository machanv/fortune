const microApp: any[] = [];

const apps = microApp.map(item => ({
  ...item, container: "#subAppViewport",
  props: {
    routerBase: item.activeRule
  }
}));
export default microApp;
