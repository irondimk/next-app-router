'use client'

import {usePathname, useRouter, useSearchParams} from "next/navigation";

const arrOptions = [1,2,3,4,5,6];


export default function PageSizeInput() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const valuePageSize = searchParams.get('pageSize') || '2';


    return <div>
        <h3 className={'mb-3 pt-3'}>PageSize</h3>
        {arrOptions.map(item => <button key={item} onClick={() => {
            const params = new URLSearchParams(searchParams);
            params.set('pageSize', item.toString())
            router.push(`${pathname}?${params.toString()}`);
        }}
            className={item.toString() === valuePageSize ? 'bg-amber-700 mr-2 p-2': 'bg-amber-100 mr-2 p-2'}
        >{item}</button>)}
    </div>;
}