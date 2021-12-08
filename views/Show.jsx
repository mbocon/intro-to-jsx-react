import React from 'react';
import Default from './Default';

function Show(props){
    return(
        <Default>
            <div className="show">
                <h1>{props.item.name}</h1>
                <p>- {props.item.notes}</p>
                <p>- ${props.item.price}</p>
                <p>Amount to buy: {props.item.qty}</p>
                <div className="options">
                    <a className="edit-btn" href={`/items/${props.item._id}/edit`}>Edit</a>
                    <form action={`/items/${props.item._id}?_method=DELETE`} method="POST">
                        <input className="delete-btn" type="submit" value="Delete" />
                    </form>
                </div>
            </div>
        </Default>
    )
}

export default Show;