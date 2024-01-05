type InfoCardProps={
  video_id:string
}
export default async function InfoCard({video_id}:InfoCardProps){
  const video_info= await fetch(process.env.NEXT_PUBLIC_HOST+'/video_info/'+video_id+".json", { next: { revalidate: 3600 } })
  return(<></>)
}