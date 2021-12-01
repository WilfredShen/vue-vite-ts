/* eslint-disable */

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<unknown, unknown, any>;
  export default component;
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_TITLE: string;
  readonly VITE_MODE: string;
  readonly VITE_BASE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
