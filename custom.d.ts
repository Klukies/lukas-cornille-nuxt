declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'apollo-link-prismic' {
  export function PrismicLink(args: { uri: string; accessToken?: string }): any;
}
