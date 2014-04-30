/* Database Setup*/
var Sequelize = require('sequelize')
    , sequelize = new Sequelize('db', 'jcreamer', 'J$1creamer', {
        dialect: 'sqlite', // or 'sqlite', 'postgres', 'mariadb'
        storage: 'db.sqlite'
    });

var Item = sequelize.define('Item', {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.DECIMAL
});

var Option = sequelize.define('Option', {
    name: Sequelize.STRING
});

Item.hasMany(Option);
Option.hasMany(Item);

sequelize
    .sync({ force: true })
    .complete(function(err) {
        if (!!err) {
            console.log('Unable to connect to the database:', err)
        } else {
            var items;
            Item.bulkCreate(require('./routes/fixtures/items.json').map(function(i) {
                return {
                    name: i.name,
                    description: i.description,
                    price: i.price
                }
            }))
                .then(function(result) {
                    return Option.bulkCreate(require('./routes/fixtures/options.json').map(function(o) {
                        return {
                            name: o.name
                        };
                    }));
                })
                .then(function() {
                    return Item.findAll({ limit: 1 })
                })
                .then(function(_items_) {
                    items = _items_;
                    return Option.findAll();
                })
                .then(function(options) {
                    return items[0].setOptions([options[2], options[3]]);
                })
                .then(function() {
                    return items[0].getOptions();
                })
                .then(function() {
                    return Item.findAll({ limit: 1, include: [Option] });
                })
                .then(function(items) {
                    console.log(items[0]);
                });
        }
    });
