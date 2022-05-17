
function GitHub({love}){

    return (

        <div>

            {/* can not put props directly
            needs to mapped so the stact
            props cant redner, since 
            it is a list of itime in an array
            of objects */}
            <h1>getStaticPropsGitHub</h1>
                <ol>
                    {love.map(({id,name}) =>(
                        <li key={id}> {name}</li>
                    ))}
                </ol>
        </div>
    )
}
// unlike the github wich does not work this way
// is the way to fetch data from teh server in next.js

export async function getStaticProps(){
    const res= await fetch('https://api.github.com/users/aalsaedi265/repos')
    const love = await res.json()
    return {
        props:{
            love
        }
    }
}
  
export default GitHub