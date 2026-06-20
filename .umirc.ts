import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    theme: {
      token: {
        colorPrimary: '#00b96b',
      },
    },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'React PC App1',
  },
  base: '/app1',
  publicPath: '/app1/',
  history: {
    type: 'browser',
  },
  routes: [
    {
      name: '首页',
      path: '/',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
  // utoopack: {},
  // mfsu: false,
  qiankun: {
    slave: {},
  },
});
