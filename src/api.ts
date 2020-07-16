
export function UserLogin (userName: string) {
  interface Result {
    errno: number,  //0表示登陆成功，其他表示失败
    msg: string //登陆结果说明
  }
  return new Promise<Result>((resolve, reject) => {
    resolve({
      errno: 0,
      msg: 'no error'
    })
  });
}

const Axios = async () => {}

export async function agreement () {
  let res:any
  try {
    res = await Axios();
  } catch (e) {
    console.log(e)
  }
  if (res && res.data) {
    return res.data as string;
  }
  return '' as string;
}
