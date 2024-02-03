import {fetchUserById} from "@/app/lib/data";

export default async function Page({params}: {params: {id: string}}) {
    const user = await fetchUserById(params.id)

    if(!user.id){
        return <div>Not found </div>
    }

    return <div>{user.name}</div>
}