import type {Metadata} from 'next'
import {Box, Flex, Heading, VStack} from "@kuma-ui/core";
import Link from 'next/link'
import NavButton from "@/app/NavButton";
import {MdFavorite, MdHistory} from "react-icons/md";
function Header() {
  return (
    <VStack padding={"18px"} height={"100%"} align={"center"} >
      <Link href="/">
        <Heading textDecorationLine={"none"} textDecorationColor={"none"} fontSize={"24px"}>ないろき動画</Heading>
      </Link>
      <NavButton title={"視聴履歴"} link={"/history"} Icon={MdHistory}/>
      <NavButton title={"お気に入り"} link={"/favorite"} Icon={MdFavorite}/>
    </VStack>
  )
}

export const metadata: Metadata = {
  title: 'ないろき動画',
  description: '試験中',
}
export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html>
    <body>
    <Flex>
      <Header/>
      {children}
    </Flex>
    </body>
    </html>
  )
}
