require('dotenv').config()

module.exports = {
  deployments: {
    netId3: {
      weenus: {
        instanceAddress: {
          '0.001': '0x750be934a9e3D0e3Ea53D5404637A536c0CdDe68',
          '0.01': '0x70a3d78447FA3482003A64288a7905b581Ab21b5',
          '0.1': '0xA467352aB675F5d0E552bF2c17731f14Ac9E5416',
        },
        tokenAddress: '0x101848d5c5bbca18e6b4431eedf6b95e9adf82fa',
        symbol: 'WEENUS',
        decimals: 18
      }
    }
  }
}
