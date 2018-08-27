import request from './../../untils/request'

export function getKeyword() {
  return request('/rank/keyWord', {
    method: 'POST'
  })
}

export function searchBook(data) {
  return request('/book/searchBook', {
    method: 'POST',
    body: data
  })
}
