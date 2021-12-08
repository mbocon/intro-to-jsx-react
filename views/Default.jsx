import React from 'react';
// const React = require('react');

function Default(props){
    console.log(props,'are the props on the Index view')

    return (
        <html>
            <head>
                <link rel="stylesheet" href="../css/style.css" type="text/css" />
                <title>Shopping List</title>
            </head>
            <body>
                <header>
                    <nav>
                        <h1><a href='/items'>Groceries</a></h1>
                        <ul>
                            <li><a href="/items">Home</a></li>
                            <li><a href="/items/new">Add Item</a></li>
                        </ul>
                    </nav>
                </header>
                <main id="app">
                    {props.children}
                </main>
                <footer>
                    <p>All Rights Reserverd &copy; {new Date().getFullYear()}</p>
                </footer>
            </body>
        </html>
    )
}

// module.exports = Default;
export default Default;

