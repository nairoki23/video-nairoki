//これはwindowがundifined以外にならないと使えん
export default function read_store(section:string){
  const js_st = localStorage.getItem(section)
  if (js_st==null){return []/*失敗したのでfalse*/}
  const data = JSON.parse(js_st)
  return data
}