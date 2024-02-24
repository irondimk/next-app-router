import {fetchUserById, fetchUserList} from "@/app/lib/data";

export async function generateStaticParams() {
    const users = await fetchUserList({
        page: '1',
        pageSize: '3'
    });

    return users.map((user) => ({
        id: String(user.id),
    }))
}

export default async function Page({params}: {params: {id: string}}) {
    const user = await fetchUserById(params.id);

    if(!user.id){
        return <div>Not found </div>
    }

    return <div>{user.name}</div>
}