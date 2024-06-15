export enum Module {
  Service = 'B-1',
  Product = 'B-2',

  Test = 'B-3',
}

export enum Feature {
  ServiceListManage = 'B-1-1',

  ProductListManage = 'B-2-1',
}

export interface Menu extends MenuItem<Module> {
  children: MenuItem<Feature>[];
}

export interface MenuItem<T> {
  name: T;
  text: string;
  icon: string;
  path: string;
  enable: boolean;
}

/**
 * 模組功能預設值
 */
export const FEATURE_SETTING: Menu[] = [
  {
    name: Module.Service,
    text: '服務項目管理',
    icon: 'support_agent',
    path: '',
    enable: true,
    children: [
      {
        name: Feature.ServiceListManage,
        text: '服務項目列表',
        icon: 'format_list_bulleted',
        path: '/manage/service',
        enable: true,
      },
    ],
  },
  {
    name: Module.Product,
    text: '產品管理',
    icon: 'inventory_2',
    path: '',
    enable: true,
    children: [
      {
        name: Feature.ProductListManage,
        text: '產品列表',
        icon: 'format_list_bulleted',
        path: '/manage/product',
        enable: true,
      },
    ],
  },

  {
    name: Module.Test,
    text: '第一層選項',
    icon: 'manage_search',
    path: '/manage/test',
    enable: true,
    children: [],
  },
];
