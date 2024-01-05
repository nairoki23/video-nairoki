export default function read_store(section:string){
  const js_st = localStorage.getItem(section)
  if (js_st==null){return {}/*失敗したのでfalse*/}
  const data = JSON.parse(js_st)
  const datan=[]
  data.forEach(function (value) {
    const date=new Date(value["date_stamp"])
    datan.push({"video_id":value["video_id"],"date_stamp":date})
  });
  return datan
}