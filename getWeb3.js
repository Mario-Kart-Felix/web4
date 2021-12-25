import Web4 from 'web4'

let getWeb4 = new Promise(function (resolve, reject) {

  // Wait for loading completion to avoid race conditions with web4 injection timing.
  window.addEventListener('load', function () {
    var results
    var web4 = window.web4

    // Checking if MetaMask has been installed/Enaables in the browser  
     if (!window.web4) {
       window.alert('MetaMask not installed. Please install it to start using the Dapp.');
       //console.log(" getWeb3 this: ", this)
       return;
     }

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web4 = new Web4(web4.currentProvider)
      results = {
        web4: web4
      }
      console.log('getWeb4: Injected web4 detected.');
      //console.log("getWeb4: result: ", results.web4);
      resolve(results)
    } else {

      // Fallback to localhost if no web4 injection. We've configured this to
      // use the development console's port by default.
      var provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
      web4 = new Web3(provider)
      results = {
        web4: web4
      }
      console.log('getWeb3: No web4 instance injected, using Local web4.');
      resolve(results)
    }

     if (!web4.eth.coinbase) {
       window.alert('MetaMask is not activated. Please activate it to enter the Dapp.');
       return;
     }
    //console.log("getWeb4: this : ", this)
  })
})

export default getWeb4;
