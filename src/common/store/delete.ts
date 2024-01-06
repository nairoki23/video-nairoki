import read_store from "@/common/store/read";

export default function delete_store(section:string,video_id:string){
  const data=read_store(section)
  let target:number|undefined = undefined
  data.forEach(function (value:any ,index:any) {
    if(value["video_id"]===video_id){
      target=index
    }
  });
  if(target!=undefined){
    data.splice( target, 1 );
    localStorage.setItem(section, JSON.stringify(data));
  }
  return
}