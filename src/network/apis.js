import { request } from './netRequest';

/**
 * sso
 * @param code
 * @returns {AxiosPromise}
 */
export function login (username,passwd) {

  return request({
    url: '/login',
    method : 'post',
    params: {
      username,
      passwd,
    },
  });
}

export function httpreq (url) {

  return request({
    baseURL: url,
    method : 'get',
    // params: {
    //   username,
    //   passwd,
    // },
  });
}


