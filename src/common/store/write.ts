
export default function write_store(section:string,video_id:string):boolean{
  var js_st = localStorage.getItem(section)
  if (js_st==null){js_st="{}"/*失敗したのでfalse*/}
  const data = JSON.parse(js_st)
  const date=new Date()
  data.unshift({"video_id":video_id,"date_stamp":date.toJSON()})
  localStorage.setItem(section, data.stringify());
  return true

}