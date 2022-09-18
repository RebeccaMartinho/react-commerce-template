const api_url = "";

async function send({ method, path, data, token }: any) {
  const opts: any = { method, headers: {} };

  if (data) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(data);
  }

  if (token) {
    opts.headers["Authorization"] = `Bearer ${token}`;
  }

  const response = fetch(`${api_url}/api/${path}`, opts)
    .then((r) => r.text())
    .then((json) => {
      try {
        return JSON.parse(json);
      } catch (err) {
        return json;
      }
    });

  return response;
}

export function get(path: string, token?: string) {
  return send({ method: "GET", path, token });
}
export function del(path: string, token?: string) {
  return send({ method: "DELETE", path, token });
}

export function post(path: string, data?: any, token?: string) {
  return send({ method: "POST", path, data, token });
}

export function put(path: string, data?: any, token?: string) {
  return send({ method: "PUT", path, data, token });
}
