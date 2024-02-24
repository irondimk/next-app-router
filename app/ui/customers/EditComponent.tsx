import {Customer} from "@/app/lib/definitions";
import {updateCustomerName} from "@/app/lib/actions";

type TProps = {
    customer: Customer
}

export default async function EditComponent({customer}: TProps) {
    const action = updateCustomerName.bind(null, customer.id);

    return <form action={action}> <input name={'name'} /> <button>Update</button> </form>
}