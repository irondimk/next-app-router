
import CommentList from "@/app/ui/fakejson/commentList";
import UserList from "@/app/ui/fakejson/userList";
import {Suspense} from "react";
import {FakeDataSkeleton} from "@/app/ui/skeletons";
import Counter from "@/app/ui/fakejson/counter";

export default function Page() {

    return <div className={'flex flex-col gap-2'}>
        <Counter />
        <Suspense fallback={<FakeDataSkeleton/>}>
            <CommentList />
        </Suspense>
        <Suspense fallback={<FakeDataSkeleton/>}>
            <UserList />
        </Suspense>
    </div>;
}