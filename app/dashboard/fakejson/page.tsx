
import CommentList from "@/app/ui/fakejson/commentList";
import UserList from "@/app/ui/fakejson/userList";
import {Suspense} from "react";
import {FakeDataSkeleton} from "@/app/ui/skeletons";
import Counter from "@/app/ui/fakejson/counter";
import Link from "next/link";

export default function Page() {

    return <div className={'flex flex-col gap-2'}>
        <Link href={'/dashboard/fakejson/slot'} >Go to slot</Link>
        <Counter />
        <Suspense fallback={<FakeDataSkeleton/>}>
            <CommentList />
        </Suspense>
        <Suspense fallback={<FakeDataSkeleton/>}>
            <UserList />
        </Suspense>
    </div>;
}