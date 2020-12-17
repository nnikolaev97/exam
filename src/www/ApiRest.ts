export class ApiRest {
  async get(url: string, options?: any) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        ...(options && options.headers),
      },
      ...options,
    });

    const result = await response.json();

    if (!response.ok)
      return Promise.reject({
        status: response.status,
        data: result,
      });

    return result;
  }

  async put(url: string, body: any, options?: any) {
    return this.get(url, {
      method: "PUT",
      body: JSON.stringify(body),
      ...options,
    });
  }

  async post(url: string, body: any, options?: any) {
    return this.get(url, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    });
  }

  async delete(url: string, options: any) {
    return this.get(url, { method: "DELETE", ...options });
  }
}
