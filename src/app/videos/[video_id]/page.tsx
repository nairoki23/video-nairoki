"use client";
import React, { useEffect, useMemo, useRef } from "react"
import Hls from "hls.js"
import NextHead from "next/head"

export default function Page ({params}:{params: { id: string };}){
    if (params["video_id"]==null){
        return (<h1>urlが無効です</h1>)
    }
    const src =params["video_id"]+".m3u8";

    const isSupportBrowser = useMemo(() => Hls.isSupported(), [])
    const videoRef = useRef(null)
    useEffect(() => {
        if (isSupportBrowser) {
            var hls = new Hls()
            hls.loadSource(src)
            hls.attachMedia(videoRef.current)
            return () => {
                hls.removeAllListeners()
                hls.stopLoad()
            }
        }
    }, [src])
    return (
        <>
            <div>
                {isSupportBrowser ? (
                    <div>
                        <video ref={videoRef} controls />
                    </div>
                ) : (
                    <div>
                        お使いのブラウザでは動画再生をサポートしていません。
                    </div>
                )}
            </div>
        </>
    )
}