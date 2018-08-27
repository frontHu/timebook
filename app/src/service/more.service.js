import request from '../../untils/request'

//获取更多列表
export function getMoreList(data) {
  return request('/rank/rankList', {
    method: 'POST',
    body: data
  })
}