import React from 'react';
import Default from './Default';

function New(props){
    return(
        <Default>
            <h1>Add to List</h1>
            <form className="new-form" action="/items" method="POST">
                <div className="form-content">
                    <label htmlFor="name">
                        Name: <input type="text" name="name" />
                    </label>
                    <label htmlFor="notes">
                        Notes: <input type="text" name="notes" />
                    </label>
                    <label htmlFor="qty">
                        QTY: <input type="number" name="qty" />
                    </label>
                    <label htmlFor="price">
                        Price: <input type="decimal" name="price" />
                    </label>
                    <input type="submit" className="new-form-btn" />
                </div>
            </form>
        </Default>
    )
}

export default New;