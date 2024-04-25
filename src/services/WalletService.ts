
import { Wallet } from 'ethers'

const generateId = () =>  Math.random().toString(16).slice(2)

export default class WalletService {
  public groups: { [key: string]: any } = {}

   createWallets(numberOfWallets: number) {
    const wallets = []
    for (let i = 0; i < numberOfWallets; i++) {
      const wallet = Wallet.createRandom()
      console.log(wallet.address)
      wallets.push(wallet)
    }
    const id = generateId()
    this.groups[id] = wallets
    return id
  }
}

// export default WalletService;
