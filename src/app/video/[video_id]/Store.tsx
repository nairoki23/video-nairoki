"use client";
import write_store from "@/common/store/write";

type Write_history_store={
  video_id:string
}
export function Write_history_store({video_id}:Write_history_store){
  write_store("history",video_id)
  return(<></>)
}