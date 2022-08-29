import wrap from '@vue/web-component-wrapper';
import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import App from './App.vue';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

const CustomElement = wrap(Vue, App);

window.customElements.define('test-webcomponent', CustomElement);
