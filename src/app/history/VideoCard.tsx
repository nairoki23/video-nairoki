"use client";
import {Flex, Heading, Spacer, Text} from "@kuma-ui/core";
import video_info_fetch from "@/common/fetch/video_info";
import {useEffect, useState} from "react";

type VideoCardProps = {
  video_id: string
  date: Date
}

type ActiveRenderProps = {
  title: string
  date: Date

}

function ActiveRender({title, date}: ActiveRenderProps) {
  return (
      <Flex width={"100%"} height={"100px"} >
        <Heading>{title}</Heading>
        <Spacer/>
        <Text>{date.toString()}</Text>
      </Flex>
  )
}

function Loading() {
  return (<Text>読み込み中です</Text>)
}

export default function VideoCard({video_id, date}: VideoCardProps) {
  const [title,setTitle]=useState<string|null>(null)
  //const [title,setTitle]=useState<string|null>(null)
  useEffect(() => {
    const info_set = async () => {
      const res = await video_info_fetch(video_id)
      setTitle(res["title"])

    }
    info_set()
  }, [])
  return (
        (title!=null) ? <ActiveRender title={title} date={date}/> : <Loading/>
  )
}