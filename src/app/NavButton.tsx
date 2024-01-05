import {Box, Text, HStack, Spacer} from "@kuma-ui/core";
import Link from "next/link";
import {IconType} from "react-icons";

type NavButtonProps = {
  title: string;
  link: string;
  Icon?: IconType;
}

export default function NavButton({title, link, Icon}: NavButtonProps) {
  const IconSet=()=>{
    if (Icon==null){return (<></>)}
    return (<Icon size={"28px"}></Icon>)
  }
  return (
      <Box width={"100%"}>
        <Link href={link}>
          <HStack width={"100%"} alignItems={"center"} >
            <IconSet/>
            <Text marginLeft={"10px"} fontSize={"20px"}>{title}</Text>
          </HStack>
        </Link>
      </Box>

  )
}