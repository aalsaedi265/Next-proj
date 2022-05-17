// githube uses intal props
//here i will use static props
// statci is what makes next so fast

const Todo=({todos})=>{

    return (

        <div>
            <style jsx>{`
                .true{
                    text-decoration: line-through;
                }
            `}</style>

            {/* can not put props directly
            needs to mapped so the stact
            props cant redner, since 
            it is a list of itime in an array
            of objects */}
            <h1>getStaticProps</h1>
                <ol>
                    {todos.map(({id,title,completed}) =>(
                        <li key={id} className={completed}> {title}</li>
                    ))}
                </ol>
        </div>
    )
}
// unlike the github wich does not work this way
// is the way to fetch data from teh server in next.js

export async function getStaticProps(){
    const res= await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()
    return {
        props:{
            todos
        }
    }
}

export default Todo