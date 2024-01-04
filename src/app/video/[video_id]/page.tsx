
import {Box, Flex} from "@kuma-ui/core";
import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('./player'), {ssr: false})
export default function Home({params}: { params: { video_id: string }; }) {
  return (
    <main>
      <Flex justify="center" alignItems="center" marginLeft={"30px"}>
        <NoSSR video_id={params["video_id"]}/>
      </Flex>
    </main>
  )
}