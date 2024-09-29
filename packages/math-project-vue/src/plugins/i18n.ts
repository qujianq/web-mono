import type { App, InjectionKey } from 'vue'

const dictionary = {
  zh: {
    welcome: '欢迎使用我的应用程序',
  },
  en: {
    welcome: 'Welcome to mine application',
  },
}

export const $i18n = Symbol('i18n') as InjectionKey<typeof dictionary>

export default {
  install: (app: App<Element>) => {
    app.provide($i18n, dictionary)
  },
}
