declare namespace NodeJS {
  export interface ProcessEnv {
    readonly ENV_VARIABLE: string;
    readonly NEXT_PUBLIC_EMAIL_SERVICE_ID: string;

    readonly NEXT_PUBLIC_EMAIL_SERVICE_TEMPLATE_ID: string;

    readonly NEXT_PUBLIC_EMAIL_SERVICE_KEY: string;
  }
}
