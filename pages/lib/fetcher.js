
export default async (...args)=>{

    const res = await fetch(...args)
    return res.json()
}

//this will work in conjunction with
//api folder for this is where the fetching will happpen