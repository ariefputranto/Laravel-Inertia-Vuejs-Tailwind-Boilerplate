import Vue from 'vue';
import VueMeta from 'vue-meta';
import { createInertiaApp } from '@inertiajs/inertia-vue';
import { InertiaProgress } from '@inertiajs/progress'

Vue.config.productionTip = false;

Vue.use(VueMeta);
InertiaProgress.init()

Vue.prototype.$route = (...args) => route(...args);

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
})