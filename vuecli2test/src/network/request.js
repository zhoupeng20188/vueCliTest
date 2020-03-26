import axios from 'axios'

export function request(config){
    const instance = axios.create({
    //   baseURL: "http://47.111.118.36:12580",
    //   baseURL: "http://localhost:8101/api/v1",
      baseURL: "http://localhost:9006",
      timeout: 5000,
    //   headers: [{"Authorization": "Bearer userToken001|0001"}]
    })
    return instance(config)
  }

  export function request2(config){
    const instance = axios.create({
    //   baseURL: "http://47.111.118.36:12580",
      baseURL: "http://localhost:8101/api/v1",
      timeout: 5000,
      headers: {"Authorization": "Bearer userToken001|0001"}
    })

    instance.interceptors.request.use(config=>{
        console.log(config)
        return config
    }, err=>{
        console.log(err)
    })

    instance.interceptors.response.use(data=>{
        console.log(data)
        return data
    }, err=>{
        console.log(err)
    })

    return instance(config)
  }