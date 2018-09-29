'use strict';

var constants = require('../configs/constants.js');
const network = require('../libs/fabric-lib/food-supply-chain-network');

var Auditor = class {

    constructor(opt) {
        this.id = opt.id;
        this.objectType = opt.objectType;        
        this.name = opt.name;
        this.content = opt.content;
    }

    toString()
    {
        return "[ auditor-id: " + this.id + " , name: " + this.name + 
        " , objectType: " + this.objectType + " , content: " + this.content + " ]";   
    }

    create()
    {
        return network.invoke('createAuditor', this);        
    }

    update()
    {
        return network.invoke('updateAuditor', this);        
    }

    static find(auditorID)
    {
        let objectType = constants.ObjectTypes.Auditor;
        return network.query('getObject', auditorID, objectType);
    }

    static findAudits(auditorID)
    {
        return network.query('getAuditsOfAuditor', auditorID);
    }
}

module.exports = Auditor;