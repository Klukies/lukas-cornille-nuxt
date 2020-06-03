import Vue from 'vue';
// @ts-ignore
import PrismicVue from '@prismicio/vue';
import htmlSerializer from './html-serializer';

Vue.use(PrismicVue, {
  htmlSerializer,
});
