import request from '../../untils/request'

//获取书本详情
export function getBookDetail(data) {
  return request('/book/bookInfo', {
    method: 'POST',
    body: data,
  })
}

//获取目录
export function getMenu(data) {
  return request('/book/getMenu', {
    method: 'POST',
    body: data
  })
}

//获取评论
export function getComment(data) {
  return request('/book/bookCatalog', {
    method: 'POST',
    body: data
  })
}

//提交评论
export function bookComment(data) {
  return request('/book/bookComment', {
    method: 'POST',
    body: data
  })
}