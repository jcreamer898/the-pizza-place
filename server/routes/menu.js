var items = require('./fixtures/items.json'),
    options = require('./fixtures/options.json'),
    itemOptions = require('./fixtures/itemOptions.json');

var Item = {
    getOptions: function(id) {
        var optionIds = itemOptions.filter(function(i) {
            return i.itemId === id;
        }).map(function(i) {
            return i.optionId;
        });

        var opts = options.filter(function(o) {
            return ~optionIds.indexOf(o.id);
        });

        return opts;
    }
};

module.exports = {
    list: function(req, res) {
        res.send(items);
    },
    get: function (req, res) {
        var item = items.filter(function(i) {
            return i.id === +req.params.id;
        })[0];

        if (!item) {
            res.status(404);
            res.send(req.params.id + ' not found.');
            return;
        }

        item.options = Item.getOptions(+req.params.id);

        res.send(item);
    },
    options: function(req, res) {
        var opts = Item.getOptions(+req.params.id);

        res.send(opts);

    }
};