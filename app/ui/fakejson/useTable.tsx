import {fetchUserList} from "@/app/lib/data";
import Link from "next/link";

export type TUserTableProps = {
    page?: string, pageSize?: string
}

export default async function UserTable(params: TUserTableProps) {
    const users = await fetchUserList({page: params.page, pageSize: params.pageSize});

    return (
        <div className={'border w-full border-black p-4'}>
            <h1 className={'mb-2'}>
                Users
            </h1>
            <div>
                {users.map((user) => <Link href={`/dashboard/fakejson/user/${user.id}`} key={user.id} className={'flex gap-2'}> <div>{user.id}</div> <div>{user.name}</div> </Link>)}
            </div>
        </div>
    );
}