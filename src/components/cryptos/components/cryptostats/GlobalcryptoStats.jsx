import React from 'react'
import { Statistic,Card,Skeleton } from 'antd';
import useCryptomarkets from '../../hooks/useCryptomarkets';
import useCryptostats from '../../hooks/useCryptostats';
import millify from 'millify';

const GlobalcryptoStats = () => {
    let {GlobalStats,isloading,isError}=useCryptomarkets()
    let {total,total24hVolume,totalCoins,totalExchanges,totalMarketCap,totalMarkets}=GlobalStats
    let {stats,isloading:loading,isError:error}=useCryptostats()
    // console.log("g",GlobalStats)
    // console.log("g",stats)
  return (
    <div className='container-fluid p-3'>
        <div className="row">
            <div className="col-4 col-sm-4 col-md-2 col-lg-2 ">
             
                <Card bordered={true} loading={loading}>
                <Statistic value={totalCoins} valueStyle={{color: 'green',}}  title="Total Coins"/>
                </Card>

            </div>
             <div className="col-4 col-sm-4 col-md-2 col-lg-2 ">
             
                <Card bordered={true} loading={loading}>
                <Statistic value={totalMarkets} valueStyle={{color: 'red',}} title="Total Markets"/>
                </Card>

            </div>
            <div className="col-4 col-sm-4 col-md-2 col-lg-2 ">
             
                <Card bordered={true} loading={loading}>
                <Statistic value={totalMarketCap} valueStyle={{color: 'green',}} title="Total Market Cap"/>
                </Card>

            </div>
            <div className="col-4 col-sm-4 col-md-2 col-lg-2 ">
             
                <Card bordered={true} loading={loading}>
                <Statistic value={millify(total24hVolume)} valueStyle={{color: 'orange',}} title="Total 24h volume"/>
                </Card>

            </div>
           
            <div className="col-4 col-sm-4 col-md-2 col-lg-2 ">
             
                <Card bordered={true} loading={loading}>
                <Statistic value={totalExchanges} valueStyle={{color: 'green',}} title="Total Exchanges"/>
                </Card>

            </div>
            <div className="col-4 col-sm-4 col-md-2 col-lg-2 ">
             
                <Card bordered={true} loading={loading}>
                <Statistic value={total} valueStyle={{color: 'blue',}} title="Total"/>
                </Card>

            </div>
        </div>
    </div>
  )
}

export default GlobalcryptoStats