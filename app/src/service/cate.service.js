import request from '../../untils/request'

//获取分类
export function getCate() {
  return request('/category/getCategoryInfo', {
    method: 'POST'
  })
}