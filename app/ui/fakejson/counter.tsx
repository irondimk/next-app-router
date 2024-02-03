'use client'

import { useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return <div>
        <div>{count}</div>
        <button type={'button'} onClick={() => setCount(count + 1)}>CLICK TO COUNT</button>
    </div>;
}