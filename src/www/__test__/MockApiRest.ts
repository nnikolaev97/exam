import { ApiRest } from "../ApiRest";

interface Interaction {
  request: { url: string; method: string; body: any };
  resolve: Function;
}

export class MockApiRest implements ApiRest {
  interactions: Interaction[] = [];

  get(url: string, { method = "GET", body = null } = {}) {
    if (this.interactions.length)
      throw new Error(
        `Cannot do another API call while one API call is waiting for Snapshot.\n` +
          `- Request: ${method} ${url} => ${JSON.stringify(body, null, 2)}\n` +
          `- Pending: ${this.interactions[0].request.method} ${
            this.interactions[0].request.url
          } => ${JSON.stringify(body, null, 2)}\n`
      );

    return new Promise((resolve, reject) => {
      this.interactions.push({
        request: { url, method, body },
        resolve(status = 200, data: any) {
          const ok = 200 <= status && status <= 299;
          if (!ok) return reject({ status, data });

          resolve(data);
        },
      });
    });
  }

  put(url: string, body: any) {
    return this.get(url, { method: "PUT", body });
  }

  post(url: string, body: any) {
    return this.get(url, { method: "POST", body });
  }

  delete(url: string, body: any) {
    return this.get(url, { method: "DELETE", body });
  }

  async popLastInteraction(hint: () => string): Promise<Interaction> {
    const startTs = Date.now();
    while (!this.interactions.length) {
      await new Promise((r) => setTimeout(r, 50));
      const currentTs = Date.now();
      if (currentTs - startTs > 1000)
        throw new Error(
          `Waiting too long for an outgoing API. Hint: ${hint()}`
        );
    }
    return this.interactions.pop() as Interaction;
  }

  getInteractions() {
    return this.interactions;
  }
}
