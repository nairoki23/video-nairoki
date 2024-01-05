import {Button, Heading, VStack} from "@kuma-ui/core";
import Link from "next/link";
export default function NotFound() {
  return (
      <VStack justify="center" alignItems="center" width={"90%"} paddingTop={"5%"}>
        <Heading as={"h1"}>ページが見つかりませんでした。</Heading>
        <Link href={"/"} ><Button fontSize={"24px"}>ホームに戻る</Button></Link>
      </VStack>
  )
}