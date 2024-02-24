import {fetchCustomerById} from "@/app/lib/data";
import EditComponent from "@/app/ui/customers/EditComponent";


export default async function Page({ params }: { params: { id: string } }) {

    const {id} = params;
    const customer = await fetchCustomerById(id);

    if(!customer) {
        return <div>Not found</div>
    }

    return <div> <p>{customer.name}</p>

    <EditComponent customer={customer} />
    </div>;
}