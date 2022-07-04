class Ur {
  constructor(instanceConfig) {
    this.defaultConfig = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
    };
  }
}

export { Ur };
