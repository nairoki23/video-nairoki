import InfoCard from "./InfoCard"
import {Box, Flex} from "@kuma-ui/core";
import dynamic from 'next/dynamic'
import write_store from "@/common/store/write";
import {Write_history_store} from "@/app/video/[video_id]/Store";

const NoSSR = dynamic(() => import('./player'), {ssr: false})
export default async function Home({params}: { params: { video_id: string }; }) {
  const res=await fetch(process.env.NEXT_PUBLIC_HOST+'/video_info/'+params["video_id"]+".json", { cache: 'no-store'})
  if(res.ok){
    <Write_history_store video_id={params["video_id"]}/>
  return (
    <main>
      <Flex justify="center" alignItems="center" marginLeft={"20px"}>
        <NoSSR video_id={params["video_id"]}/>
        <InfoCard video_id={params["video_id"]}/>
      </Flex>
    </main>
  )}
  else{
    return(
        <h1>動画の読み込みに失敗しました</h1>

    )
  }
}