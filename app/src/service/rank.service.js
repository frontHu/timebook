import request from '../../untils/request'

//获取书本列表
export function getRankList(data) {
  return request('/rank/rankList', {
    method: 'POST',
    body: data
  })
}