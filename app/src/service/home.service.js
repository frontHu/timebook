import request from './../../untils/request'

export function getBook(data) {
  return request('/book/indexBook', {
    method: 'POST',
    body: data,
  })
}
