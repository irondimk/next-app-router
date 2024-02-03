
import {fetchComments} from "@/app/lib/data";


export default async function CommentList() {
    const comments = await fetchComments();

    return (
        <div className={'border w-full border-black p-4'}>
            <h1 className={'mb-2'}>
                Comments
            </h1>
            <div>
                {comments.map((comment) => <div key={comment.id} className={'flex gap-2'}> <div>{comment.id}</div> <div>{comment.name}</div> </div>)}
            </div>
        </div>
    );
}