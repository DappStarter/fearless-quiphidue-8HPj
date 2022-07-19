require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind concert harvest local bottom siren'; 
let testAccounts = [
"0x96888391b58953b3de44edb80c9a0acb6a6155d9bd55fa71ec47af05268b96bf",
"0x14b95fd4957e80af20c77dbada92465d67039a9a38ad1f5c954ef5672edb7f70",
"0x5770b32bf6f26ce90d5caa13379d3fb5fe475a5ea21a5f8b4fad3f539dd398ca",
"0x5ea3e26063f5b94d648a0546fb3d2e0fecacd5a5c910a4a0ed08357505083b50",
"0x8f90a28df60a205847b94c7f68757f3c08dd63182c93e2dadde7f941d5c48275",
"0x6f9596f4eab3f2a858fab4c5ea802e42b100887ecf7da882251fa665fd254e75",
"0x6169e738362a0e97ab5c2112b870ce37f4a364838b40d46053d4e3aaa63d8753",
"0x7b3de6ca55a9ec554966370a5a7d9097673d06c1e17ca55c89f43247a6e887e9",
"0x97081e11c5c8d872d386bbebabe95c1c6744f48254670ec165364efba97d714c",
"0xc6263b247792ef380adcb629dd3f47370bb512e312a7e192fe929c8866e03e04"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

