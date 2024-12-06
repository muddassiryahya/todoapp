// export default function About(props) {
//     console.log("props", props);
//     return <div>About</div>
// }


// export const getServerSideProps = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const todos = await response.json();

//     return {
//         props: {
//             name: "Muhammad Usman",
//             todos
//         }
//     }
// }

'use client';

import axios from "axios";
import { useEffect, useState } from "react";

export default function About() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        axios("/api/users")
            .then(res => console.log(res.date))
    }, [])

    const addUser = async () => {
        const user = await axios.post("/api/users", { name, email, password })
        console.log("Users", user.data);
    }

    return (
        <div>
            <h1>About</h1>
            <br />
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            <button onClick={addUser}>Add User</button>
        </div>
    )
}

