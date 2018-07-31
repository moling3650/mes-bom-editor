import request from '@/apis/request'

export default {
  fetchBom () {
    return request.get('/DataAPI/Commom.ashx?ActType=GetQueryControls')
  }
}
