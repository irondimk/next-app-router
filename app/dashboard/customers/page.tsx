import {fetchCustomersList} from "@/app/lib/data";
import Link from "next/link";


export default async function Page() {
    const customers = await fetchCustomersList();

    return <div>
        {customers.map(i => <div key={i.id}> <Link  href={`/dashboard/customers/${i.id}`}> {i.name} </Link> </div>)}

    </div>;
}