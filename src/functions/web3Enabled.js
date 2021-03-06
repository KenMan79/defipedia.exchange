import Web3 from 'web3'

export const web3Enabled = async () => {
    // @DEV using http provider (infura node) to fetch data //
    // @Notice: no longer using window.ethereum to adjust for better/elegant multiple wallet support //
    // Earlier http was only used to fetch data if user's browser wasn't ready for web3 //
    const provider = new Web3.providers.HttpProvider(`${process.env.REACT_APP_WEB3_HTTP_PROVIDER}`)
    const web3 = new Web3(provider)
    return web3

}