// import store from 'common';

const microApps = [
  {
    name: 'sub-react',
    entry: '//localhost:4322',
    container: '#subAppViewport',
    activeRule: '/react',
  },
  {
    name: 'sub-vue',
    entry: '//localhost:8080',
    container: '#subAppViewport',
    activeRule: '/vue',
  }, {
    name: 'sub-angular',
    entry: '//localhost:4321',
    container: '#subAppViewport',
    activeRule: '/angular',
  }
];

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subAppViewport',
    props: {
      routerBase: item.activeRule,
      // getGlobalState: store.getGlobalState
    }
  };
});
export default microApps;
