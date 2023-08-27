import * as express from 'express';

export function expressAuthentication(request: express.Request, securityName: string, scopes?: string[]): Promise<any> {
  if (securityName && scopes) {
  }
  let token;
  if (request.query && request.query.api_key) {
    token = request.query.api_key;
  }

  if (token === 'abc123456') {
    return Promise.resolve({
      id: 1,
      name: 'DanT',
    });
  } else {
    return Promise.reject({});
  }
}
