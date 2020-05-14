import Vue, { VueConstructor } from 'vue';

declare module '*.svg' {
  const content: VueConstructor<Vue>;
  export default content;
}
