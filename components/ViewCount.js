import React from 'react';
import useSWR from 'swr'
import fetcher from "../lib/fetcher"
import Card from 'react-bootstrap/Card'


function ViewCount(){
    const{data,error}=useSWR(`/api/youtube.js`,fetcher)

    if (error) console.error(error)

    const viewCount= data?.ViewCount

    return (
        <div>
            <Card style={{padding: '5px'}} className="shadow-border">
                <Card.Title>YouTube Views</Card.Title>
                <Card.Text style={{fontSize: '30px'}} >{viewCount}</Card.Text>
            </Card>
        </div>

    )
}

export default ViewCount