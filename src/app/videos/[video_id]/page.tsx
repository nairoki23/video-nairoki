export default function Page ({params}:{params: { id: string };}){
    return(<p>{params["video_id"]}</p>)
}