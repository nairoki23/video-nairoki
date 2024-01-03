"use client";
import dynamic from 'next/dynamic'
import { Box } from "@kuma-ui/core";
const NoSSR = dynamic(() => import('./player'), { ssr: false })
export default function Home() {
  return (
    <main>
        <Box >
            <NoSSR/>
        </Box>
    </main>
  )
}
