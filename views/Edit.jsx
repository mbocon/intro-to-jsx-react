import React from 'react'; 
import Default from './Default';

function Edit(props){
    console.log(props,'are the props on the Index view')

    return (
        <Default>
            <div className="edit">
                <form className="edit-form" action={`/items/${props.item._id}?_method=PUT`} method="POST">
                    <div className="form-content">
                    <label htmlFor="name">
                        Name: <input type="text" name="name" defaultValue={props.item.name} />
                    </label>
                    <label htmlFor="notes">
                        Notes: <input type="text" name="notes" defaultValue={props.item.notes} />
                    </label>
                    <label htmlFor="qty">
                        QTY: <input type="number" name="qty" defaultValue={props.item.qty} />
                    </label>
                    <label htmlFor="price">
                        Price: <input type="decimal" name="price" defaultValue={props.item.price} />
                    </label>
                    <input type="submit" className="edit-form-btn" />
                    </div>
                </form>
            </div>
        </Default>
    )
}

export default Edit;