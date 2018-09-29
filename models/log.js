'use strict';

var constants = require('../configs/constants.js');
const network = require('../libs/fabric-lib/food-supply-chain-network.js');

var Log = class {

    constructor(opts) {
        this.id = opts.id;
        this.objectType = opts.objectType;        
        this.time = opts.time;
        this.ref = opts.ref;
        this.cte = opts.cte;
        this.content = opts.content;
        this.asset = opts.asset;
        this.product = opts.product;
        this.location = opts.location;
    }

    toString()
    {
        return "[ Log-id: " + this.id + " , time: " + this.time + 
        " , objectType: " + this.objectType + " , content: " + this.content + " ]";   
    }

    create()
    {
        return network.invoke('createLog', this);        
    }

    update()
    {
        return network.invoke('updateLog', this);        
    }

    static find(id)
    {
        let objectType = constants.ObjectTypes.Log;
        return network.query('getObject', id, objectType);
    }
}

module.exports = Log;