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
  base: '/webapp/react-pc-app1/',
  publicPath: '/webapp/react-pc-app1/',
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
  mfsu: false, // 注意：Umi 4 开启 qiankun slave 时通常需要关闭 mfsu 或做特殊处理
  qiankun: {
    slave: {},
  },
});
