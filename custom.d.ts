declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'apollo-link-prismic' {
  export function PrismicLink(args: { uri: string; accessToken?: string }): any;
}

declare module 'vue-fragment' {
  import Vue, { AsyncComponent, ComponentOptions, PluginObject } from 'vue';

  type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent;

  export const Fragment: Component;
  export const Plugin: PluginObject<undefined>;

  namespace VueFragment {
    export const Fragment: Component;
    export const Plugin: PluginObject<undefined>;
  }
  export default VueFragment;
}
