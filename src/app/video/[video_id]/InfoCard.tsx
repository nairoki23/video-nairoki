import {Box, Flex, Heading,Text} from "@kuma-ui/core";
import video_info_fetch from "@/common/fetch/video_info";

type InfoCardProps = {
  video_id: string
}
export default async function InfoCard({video_id}: InfoCardProps) {
  const video_info = await video_info_fetch(video_id)
  return (
    <Box height={"720px"}>
      <Flex>
        <Heading>{video_info["title"]}</Heading>
      </Flex>
      <Text marginLeft={"12px"}>{video_info["description"]}</Text>
    </Box>
  )
}