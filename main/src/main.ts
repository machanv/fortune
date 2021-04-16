import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js/dist/zone';
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  initGlobalState,
  runAfterFirstMounted,
} from 'qiankun';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import microApps from './micro-app';

if (environment.production) {
  enableProdMode();
}

registerMicroApps(microApps, {
  // beforeLoad: [
  //   (app => {
  //     console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
  //   },
  // ],
  // beforeMount: [
  //   (app) => {
  //     console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
  //   },
  // ],
  // afterUnmount: [
  //   (app) => {
  //     console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
  //   },
  // ],
});

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value: any, prev: any) =>
  console.log('[onGlobalStateChange - master]:', value, prev)
);

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});
setDefaultMountApp('/');
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
