import {ReactNode} from "react";

export default function Layout({ children, slotprivacy }: { children: React.ReactNode, slotprivacy: ReactNode }) {


    return <div>{children} {slotprivacy}</div>
}