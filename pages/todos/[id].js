// staring with [] make the file dynamic
// we are creating a stactic path to 
// one of the totdos

const TodoItem =({todo})=> {
    return (

        <div>
            <h1>getStacticPath</h1>

            {/* these are keys befind an object this
            api is an array of objects */}

            <p>userId: {todo.userId}</p>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <p>completed: {todo.completed.toString()}</p>
        </div>
    )
}
// to get the id key of the itme i want
export async function getStaticProps(x){
    const res= await fetch(`https://jsonplaceholder.typicode.com/todos/${x.params.id}`)
    const todo = await res.json()
    return {
        props:{
            todo
        }
    }
}
// will get stactic path of aysnc function
// to get path we want to the value
export async function getStaticPaths() {
    return {
        // you will need the underscore for this to wrok
        //  makre user it is (_. whateever)=> you need the udner score
        paths: new Array(200).fill(null).map((_, el) => (
            { params: { id: `${el + 1}` } }
        )),
        fallback: true,
    }
}

export default TodoItem