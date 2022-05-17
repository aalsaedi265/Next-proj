
// the todos used a get system property
// here  we are suing a s POST
const Posts = ({ results: query }) => {
    return (
        <div>

            <h1>getServerSideProps</h1>

            {query.map((q, index) => (
                <div key={index}>
                    <h3>{q.id} {q.title}</h3>
                    <p>{q.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?q=${context.params.query}`)
    const json = await res.json()
   
    return {
        props: {
            results: json,
        },
    }
}

export default Posts