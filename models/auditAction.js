'use strict';

var constants = require('../configs/constants.js');
const network = require('../libs/fabric-lib/food-supply-chain-network.js');

var AuditAction = class {

    constructor(opt) {
        this.id = opt.id;
        this.objectType = opt.objectType;        
        this.time = opt.time;
        this.auditor = opt.auditor;
        this.location = opt.location;
        this.objectId = opt.objectId;
        this.content = opt.content;
    }

    toString()
    {
        return "[ AuditAction-id: " + this.id + " , time: " + this.time +         
        " , objectType: " + this.objectType + " , objectId: " + this.objectId + " , content: " + this.content + " ]";   
    }

    create()
    {
        return network.invoke('createAuditAction', this);        
    }

    update()
    {
        return network.invoke('updateAuditAction', this);        
    }

    static find(id)
    {
        let objectType = constants.ObjectTypes.AuditAction;
        return network.query('getObject', id, objectType);
    }    
}

module.exports = AuditAction;