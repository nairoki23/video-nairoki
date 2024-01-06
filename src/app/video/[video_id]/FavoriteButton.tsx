"use client";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {useEffect, useState} from "react";
import read_store from "@/common/store/read";
import delete_store from "@/common/store/delete";
import write_store from "@/common/store/write";
type FavoriteButtonProps={
  video_id:string
}
export default function FavoriteButton({video_id}:FavoriteButtonProps){
  const [isFavorite,setFavorite]=useState<boolean>(false)
  useEffect(()=>{
    if(window==undefined){return}
    const favorite=read_store("favorite")
    favorite.forEach(function (value:any ) {
      if(value["video_id"]===video_id){
        setFavorite(true)
        return
      }
    });
  },[])
  useEffect(()=>{
    if(window==undefined){return}
    if(isFavorite){
      write_store("favorite",video_id)
    }else{
      delete_store("favorite",video_id)
    }
  },[isFavorite])


  return (isFavorite? <MdFavorite color={"red"} onClick={()=>{setFavorite(false)}}  size={"30px"}/> : <MdFavoriteBorder onClick={()=>{setFavorite(true)}} size={"30px"}/>)
}