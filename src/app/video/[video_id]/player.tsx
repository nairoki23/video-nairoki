"use client";
import ReactPlayer from "react-player";
import write_store from "@/common/store/write";

type PlayerProps = {
  video_id: string
};
export default function Player({video_id}: PlayerProps) {
  return (
    <ReactPlayer onStart={()=>{write_store("history",video_id)}} url={process.env.NEXT_PUBLIC_HOST + "/videos/" + video_id + ".m3u8"} controls width={"1280px"} height={"720px"}/>
  )
}