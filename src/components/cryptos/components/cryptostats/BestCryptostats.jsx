import React from 'react'
import useCryptostats from '../../hooks/useCryptostats'
import CryptoAreaChart from '../graphs/AreaChart'

const BestCryptostats = () => {
    let {stats,isloading,isError}=useCryptostats()
    if(isloading){
        return <h1>loading...</h1>
    }
    if(isError){
        return <h4>Error</h4>
    }


    // distructuring the best cryptos 
    const {bestCoins=[]}=stats
    // console.log("best_coins",bestCoins)
  return (
   <div className='container my-3'>
     <div className='row gy-3'>
        {/* child componet for displaying the best coins along with area graph */}
        {
           bestCoins.map((coins)=><CryptoAreaChart key={coins.uuid} coins={coins} />)
        }
    </div>
   </div>
  )
}

export default BestCryptostats