require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture strategy razor oven hub hunt slender fringe general'; 
let testAccounts = [
"0x1121924f3386e7261f8e5090eefc127eb9a441ee8a31af34e288c7e172caedbc",
"0xfa43b8d7b4089601d1a2ee08b32bbd47c98daa93e881bad0b80aabbca8c6fd3d",
"0x5c0f78500b30290650e1f327c7ea81a3f7c209cd67cd0fd7c3013beadf8f8db8",
"0xd6d5db65f37f2e53bd7eead1069348a9a3d2fbd86ca12956ad4042b41ddc6fad",
"0x0d8983ac190d3098d7dfdbf0a746d4a09f2136dcf9a3077d793cb4b2b4d8bbb0",
"0xcf59ce331f32c51501ca0522db0fef744263f78fbc0c032dcaabd8e870a3ebae",
"0xd963709ebcd5b84e36af9c9eefe2d924bf0d91b2af360749ddc909bbff1f91cf",
"0x987da04d7fc62d0dbd663c037d432020ab014c6e628bfbcc852d1ff6ee94287a",
"0x954bb81f4ba2a113c1f13dca282c56c170786134ef62dc3e68f75f16e8d97dd6",
"0xd7d1eaa34bbd005ddf73d9f3c86ef45c435b3f447b28a105c007d10c8b441ba7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
