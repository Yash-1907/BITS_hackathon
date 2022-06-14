import type { NextPage } from 'next'
import Header from './../components/Header'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#1A1A1D] text-black select-none flex flex-col`,
  uniloan: `text-purple-600 text-6xl text-mono ml-[40%] mb-20`,
  howWorks: `text-white text-mono text-2xl ml-[12%] mb-10`,
  instructions: `text-white text-mono text-xl ml-[15%] mb-10`,
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.uniloan}>UNILOAN</div>
      <div>
        <div className={style.howWorks}>How It Works ?</div>
        <div className={style.instructions}>
          Borrower:  Lists their Uniswap Position NFTs as a collateral to obtain loan from the lender.
        </div>
        <div className={style.instructions}>
          Lender:  Selects the NFT they want to lend loan to in return of some portion of the fees collected during the loan period.
        </div>
      </div>
    </div>
  )
}

export default Home
