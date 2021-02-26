import React, {useEffect, useState} from 'react';
import { Auction } from '../requests';
import FormErrors from './FormErrors';

const AuctionEditPage = (props)=>{
    const [auction,setAuction]=useState(null);
    const [errors,setErrors]=useState({});

    const loadAuction =()=>{
        Auction.show(props.match.params.id)
        .then(auction=>{
            setAuction(auction);
        })
    }

    useEffect(()=>{
        loadAuction();
    },[]);

    const updateAuction = event=>{
        event.preventDefault();
        const {currentTarget}=event;
        const fd = new FormData(currentTarget);

        const updatedAuction={
            title: fd.get('title'),
            description: fd.get('description')
        }
        Auction.update(auction.id, updatedAuction)
        .then(data=>{
            if(data.errors){
                setErrors(data.errors);
            }else{
                props.history.push(`/auctions/${auction.id}`);
            }
        })
    }
    return(
        <main>
            <h1>Update Auction</h1>
            <form onSubmit={event=>updateAuction(event)}>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <br/>
                    <FormErrors errors={errors} forField='title'/>
                    <br/>
                    <input name='title' id='title' defaultValue={auction ? auction.title:''}/>
                </div>
                <div>
                    <label htmlFor='description'>Description: </label>
                    <br/>
                    <FormErrors errors={errors} forField='description'/>
                    <br/>
                    <textarea name='description' id='description' defaultValue={auction ? auction.description : '' } cols='60' rows='5'/>
                </div>
                <div>
                    <input type='submit' value='Update Auction' /> 
                </div>
            </form>
        </main>
    )

}
export default AuctionEditPage;