import React from 'react';
import useSWR from 'swr'
import fetcher from "../lib/fetcher"
import Card from 'react-bootstrap/Card'


function SubscriberCount(){
    const{data,error}=useSWR(`/api/youtube.js`,fetcher)

    if (error) console.error(error)

    const subscriberCount = data?.SubscriberCount 

    return (
        <div>
            <Card style={{padding: '5px'}} className="shadow-border">
                <Card.Title>YouTube Subscribers</Card.Title>
                <Card.Text style={{fontSize: '30px'}} >{subscriberCount}</Card.Text>
            </Card>
        </div>

    )
}

export default SubscriberCount