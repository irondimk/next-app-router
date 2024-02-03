import UserTable, {TUserTableProps} from "@/app/ui/fakejson/useTable";
import PageSizeInput from "@/app/ui/fakejson/pageSizeInput";

export default function Page({searchParams} : {searchParams: TUserTableProps}) {
    return <div>
        <UserTable {...searchParams} />
        <PageSizeInput />
    </div>;
}