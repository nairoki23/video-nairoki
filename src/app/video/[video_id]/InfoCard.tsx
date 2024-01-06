import {Box, Flex, Heading, HStack, Spacer, Text} from "@kuma-ui/core";
import video_info_fetch from "@/common/fetch/video_info";
import FavoriteButton from "@/app/video/[video_id]/FavoriteButton";

type InfoCardProps = {
  video_id: string
}


export default async function InfoCard({video_id}: InfoCardProps) {
  const video_info = await video_info_fetch(video_id)
  return (
    <Box height={"720px"} width={"360px"}>
      <Flex width={"100%"} marginY={"20px"} justify={"space-between"} flexDirection={"center"}>
        <Heading margin={"0px"} fontSize={"30px"}>{video_info["title"]}</Heading>
        <FavoriteButton video_id={video_id}/>
      </Flex>
      <Text marginLeft={"12px"}>{video_info["description"]}</Text>
    </Box>
  )
}