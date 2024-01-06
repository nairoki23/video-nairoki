export default async function video_info_fetch(video_id: string) {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/video_info/' + video_id + ".json", { cache: 'no-store'})
  return (await res.json())
}