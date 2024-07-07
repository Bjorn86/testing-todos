declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTO_OPEN: string;
    }
  }
}

export {};
