/* eslint-disable @typescript-eslint/no-explicit-any */
type GetV1UserIdInput = {} & {
    /** a numeric string containing the id of the user */
    id: string;
};

type GetV1UserIdResponse = {
    status: "success";
    data: {
        demoData: string;
    };
} | {
    status: "error";
    error: {
        message: string;
    };
};

type PostV1UserIdInput = {} & {
    /** a numeric string containing the id of the user */
    id: string;
    name: string;
};

type PostV1UserIdResponse = {
    status: "success";
    data: {
        name: string;
        createdAt: string;
    };
} | {
    status: "error";
    error: {
        message: string;
    };
};

export type Path = "/v1/user/:id" | "/v1/user/:id";

export type Method = "get" | "post" | "put" | "delete" | "patch";

export type MethodPath = `${Method} ${Path}`;

export interface Input extends Record<MethodPath, any> {
    "get /v1/user/:id": GetV1UserIdInput;
    "post /v1/user/:id": PostV1UserIdInput;
}

export interface Response extends Record<MethodPath, any> {
    "get /v1/user/:id": GetV1UserIdResponse;
    "post /v1/user/:id": PostV1UserIdResponse;
}

export const jsonEndpoints = { "get /v1/user/:id": true, "post /v1/user/:id": true };

export type Provider = <M extends Method, P extends Path>(method: M, path: P, params: Input[`${M} ${P}`]) => Promise<Response[`${M} ${P}`]>;

export type Implementation = (method: Method, path: string, params: Record<string, any>) => Promise<any>;

/*
export const exampleImplementation: Implementation = async (
  method,
  path,
  params
) => {
  const hasBody = !["get", "delete"].includes(method);
  const searchParams = hasBody ? "" : `?${new URLSearchParams(params)}`;
  const response = await fetch(`https://example.com${path}${searchParams}`, {
    method: method.toUpperCase(),
    headers: hasBody ? { "Content-Type": "application/json" } : undefined,
    body: hasBody ? JSON.stringify(params) : undefined,
  });
  if (`${method} ${path}` in jsonEndpoints) {
    return response.json();
  }
  return response.text();
};

const client = new ExpressZodAPIClient(exampleImplementation);
client.provide("get", "/v1/user/retrieve", { id: "10" });
*/
export class ExpressZodAPIClient {
    constructor(protected readonly implementation: Implementation) { }
    public readonly provide: Provider = (method, path, params) => this.implementation(method, Object.keys(params).reduce((acc, key) => acc.replace(`:${key}`, params[key]), path), Object.keys(params).reduce((acc, key) => path.indexOf(`:${key}`) >= 0 ? acc : { ...acc, [key]: params[key] }, {}));
}