
async function getProfileData() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export default async function Profile() {
    const todos = await getProfileData();

    console.log("todos", todos);

    return (
        <div>
            <h2>Profile Page</h2>
            <ul>
                {todos.map((v, i) => <li key={i}>{v.title}</li>)}
            </ul>
        </div>
    )

}

