import React from 'react';
import Default from './Default';

function Index(props){
    console.log(props,'are the props on the Index view')
    return(
        <Default>
            <div className="index">
                <h1>Items to Buy</h1>
                <ul className="index-ul">
                    {props.items.map(item => {
                        return(
                            <li className="list-item" key={item._id}>
                                <a href={`/items/${item._id}`}>
                                    <h2>{item.name}</h2>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Default>
    )
}

export default Index;