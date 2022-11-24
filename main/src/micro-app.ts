const microApp: any[] = [
  {
    name: "caramel",
    entry: "//localhost:50001",
    container: "#subAppViewport",
    activeRule: "/caramel"
  }, {
    name: "game",
    entry: "//localhost:5002",
    container: "#subAppViewport",
    activeRule: "/game"
  }
];

const apps = microApp.map(item => ({
  ...item, container: "#subAppViewport",
  props: {
    routerBase: item.activeRule
  }
}));
export default microApp;
