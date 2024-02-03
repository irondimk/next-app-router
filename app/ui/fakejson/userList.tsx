import { fetchUsers} from "@/app/lib/data";
import Link from "next/link";

export default async function UserList() {
    const users = await fetchUsers();

    if(!users.length) {
        return <div>Not found</div>
    }

    return (
        <div className={'border w-full border-black p-4'}>
            <Link href={'/dashboard/fakejson/user/list'}>
            <h1 className={'mb-2'}>
                Users
            </h1>
            </Link>

            <div>
                {users.map((user) => <Link href={`/dashboard/fakejson/user/${user.id}`} key={user.id} className={'flex gap-2'}> <div>{user.id}</div> <div>{user.name}</div> </Link>)}
            </div>
        </div>
    );
}