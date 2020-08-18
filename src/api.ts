import axios from 'axios';

export function UserLogin (userName: string) {
  interface Result {
    errno: number,  //0表示登陆成功，其他表示失败
    msg: string //登陆结果说明
  }
  return new Promise<Result>((resolve, reject) => {
    resolve({
      errno: 222,
      msg: 'no error'
    })
  });
}


export async function Agreement () {
  // interface Agresult {
  //   status: number,
  //   data: string,
  // }
  let res = await axios.get('./index.html');
  if (res.status == 200) {
    return {
      error: 0,
      data: res.data
    }
  } else {
    return {
      error: 1,
      msg: res.statusText
    }
  }
}