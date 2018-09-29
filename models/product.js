'use strict';

var constants = require('../configs/constants.js');
const network = require('../libs/fabric-lib/food-supply-chain-network.js');

var Product = class {

    constructor(opts) {
        this.id = opts.id,
        this.objectType = opts.objectType,
        this.name = opts.name,
        this.content = opts.content;
    }

    toString()
    {        
        return "[ Product-id: " + this.id + " , name: " + this.name + 
            " , objectType: " + this.objectType + " , content: " + this.content + " ]";   
    }

    create()
    {
        return network.invoke('createTraceable', this);
    }

    update()
    {
        return network.invoke('updateTraceable', this);        
    }

    static find(id)
    {
        let objectType = constants.ObjectTypes.Product;
        return network.query('getObject', id, objectType);
    }
}

module.exports = Product;