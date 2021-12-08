const itemsRouter = require('express').Router();
const Item = require('../models/item');

// seed route
itemsRouter.get('/seed', async (req, res) => {
    const data = [
        {
            name: 'Milk',
            notes: '2% fat',
            qty: 1,
            price: 8.99,
        },
        {
            name: 'Eggs',
            notes: 'A dozen',
            qty: 1,
            price: 5.99,
        },
        {
            name: 'Bread',
            notes: 'Whole grain',
            qty: 2,
            price: 3.99,
        },
        {
            name: 'Cheese',
            notes: 'Cheddar',
            qty: 1,
            price: 7.99,
        },
    ];
    await Item.deleteMany({});
    await Item.create(data);
    res.redirect('/items');
});

// auto re-direct route
itemsRouter.get('/', (req, res) => {
    res.redirect('/items');
})

// index route
itemsRouter.get('/items', (req, res) => {
    Item.find({}, (err, items) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            // res.render('Index.jsx', { items: items });
            res.json(items);
        }
    })
})

// new route
itemsRouter.get('/items/new', (req, res) => {
    res.render('New.jsx');
})

// delete route
itemsRouter.delete('/items/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id, (err, deletedItem) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.redirect('/items');
        }
    })
})

// update route
itemsRouter.put('/items/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedItem) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.redirect(`/items/${req.params.id}`);
        }
    })
})

// create route
itemsRouter.post('/items', (req, res) => {
    Item.create(req.body, (err, createdItem) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.redirect('/items');
        }
    })

})

// edit route
itemsRouter.get('/items/:id/edit', (req, res) => {
    Item.findById(req.params.id, (err, itemToEdit) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            // res.render('Edit.jsx', { item: itemToEdit });
            res.json(itemToEdit);
        }
    })
})

// show route
itemsRouter.get('/items/:id', (req, res) => {
    Item.findById(req.params.id, (err, foundItem) => {
        if (err) {
            res.status(500).send(err.message);
            // res.send(err.message);
        } else {
            // res.render('Show.jsx', { item: foundItem });
            res.json(foundItem);
        }
    })
})


// export itemsRouter
module.exports = itemsRouter;