var FabricCAClient = require('fabric-ca-client');
var fs = require('fs');
var path = require('path');
var configFilePath = path.join(__dirname, './ConnectionProfile.yml');
const CONFIG = fs.readFileSync(configFilePath, 'utf8')

class FBCAClient extends FabricCAClient {

    constructor(props) {

        super(props);
    }
}
    
var fabricCAClient = new FBCAClient();
fabricCAClient.loadFromConfig(configFilePath);
module.exports = fabricCAClient;
