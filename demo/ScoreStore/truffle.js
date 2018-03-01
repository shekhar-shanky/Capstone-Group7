module.exports = {
  networks: {
    development: {
     host: "localhost",
     port: 8545,
     network_id: "*" // Match any network id
    },
    production: {
      host: "bclf4j5veg5m.southindia.cloudapp.azure.com",
      port: 8545,
      gas: 4212388,
      network_id: "*" // Match any network id
     }
   } 
};
