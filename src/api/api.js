import jsonp from 'jsonp'
import axios from 'axios'
import { SIDE_BAR_DATA, SITE_DATA } from '@/utils/const'

export function querySuggestData(keyword) {
  let url = 'https://www.baidu.com/sugrec?prod=pc_hao123&pre=1&p=3&ie=utf-8&json=1&from=pc_hao123'
  url += '&wd=' + encodeURIComponent(keyword)
  url += '&_=' + new Date().getTime()
  return new Promise((resolve, reject) => {
    jsonp(url, null, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        console.log(data)
        resolve(data)
      }
    })
  })
}

export function getSiteData() {
  // const url = ('static/data/data.json')
  // return axios.get(url)
  return new Promise(resolve => {
    resolve({ data: SITE_DATA })
  })
}

export function getDefaultSideData() {
  // const url = ('static/data/sidebar.json')
  // return axios.get(url)
  return new Promise(resolve => {
    resolve({ data: SIDE_BAR_DATA })
  })
}

export function apiGetHotNews() {
  return axios.get('http://127.0.0.1:18888/api/Common/GetHotNews')
}

export function GetWeiboRealHot() {
  return new Promise((resolve, reject) => {
    const apiUrl = 'http://127.0.0.1:18888/api/Common/GetWeiboHotNews'
    // const apiUrl = '/weiboapi/top/summary?cate=realtimehot'
    axios.get(apiUrl).then(resp => {
      // console.log(resp)
      if (resp.data.ok !== 1) {
        reject()
        return
      }
      const data = resp.data.data.realtime
      const hotData = []
      let item = null
      for (let i = 0; i < data.length; i++) {
        if (i % 10 === 0) {
          if (item != null) {
            hotData.push(item)
          }
          item = {
            title: '微博热搜(' + (i) + '-' + (i + 9) + ')',
            url: 'https://s.weibo.com/top/summary?cate=realtimehot',
            list: []
          }
        }
        item.list.push({
          title: data[i].word, // data[i].hot_word,
          url: `https://s.weibo.com/weibo?q=%23${encodeURIComponent(data[i].word)}%23&t=31&band_rank=2&Refer=top` // https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%89%BA%E6%B4%B2%E7%A7%B0%E7%96%91%E9%81%AD%E6%96%B0%E5%9E%8B%E8%9F%B9%E5%8D%A1%E8%AF%88%E9%AA%97%23&t=31&band_rank=1&Refer=top
        })
      }
      hotData.push(item)
      resolve(hotData)
    }).catch(err => {
      reject(err)
    })
  })
}

export function getSMZDMData(page) {
  return new Promise((resolve, reject) => {
    const timesort = Date.parse(new Date()) / 1000
    axios.get(`/smzdmapi/homepage/json_more?timesort=${timesort}p=${page}&past_num=${20 * page}`).then(resp => {
      console.log(resp)
      resolve(resp.data.data)
    })
  })
}
