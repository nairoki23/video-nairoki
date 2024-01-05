"use client";
import {Box, Heading, VStack} from "@kuma-ui/core";
import read_store from "@/common/store/read";
import VideoCard from "@/app/history/VideoCard";
import {useEffect, useState} from "react";

export default function History() {
  const [History_List,History_set]=useState([<></>])
  useEffect(()=>{
    if(window==undefined){return}
    const history=read_store("history")
    const List_his:any[]=[]
    history.forEach(function (value:any,index:any ) {
      const date=new Date(value["date_stamp"])
      List_his.push(<VideoCard key={index} video_id={value["video_id"]} date={date}/>)
    });
    History_set(List_his)
    return(()=>{History_set([<></>])})
  },[])

  return (
      <Box margin={"10px"}>
        <Heading as={"h1"}>視聴履歴</Heading>
      <VStack margin={"10px"}>
        {History_List}
      </VStack>
      </Box>
  )
}