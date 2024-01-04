import type {Metadata} from 'next'
import {Box, Flex, Heading, VStack} from "@kuma-ui/core";
import Link from 'next/link'

function Header() {
  return (
    <VStack marginX={"20px"} height={"100%"}>
      <Link href="/">
        <Heading fontSize={"24px"}>video.nairoki.dev</Heading>
      </Link>
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
