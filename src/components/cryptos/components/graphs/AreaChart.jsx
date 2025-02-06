import React from 'react'
import { Card } from "antd";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
const cardinal = curveCardinal.tension(0.2);
import useCryptoHistory from '../../hooks/useCryptoHistory';
import styles from "../../../../styles/AreaChart.module.css"

const CryptoAreaChart = ({coins}) => {
    console.log("coins",coins)
    const {uuid:coinId,name,symbol,coinrankingUrl,iconUrl}=coins
    // passing the coin id to get the history of every coins 
    const {history,isloading,isError}=useCryptoHistory(coinId)
    console.log("tt",history)

    if(isloading){
        return <h4>loading...</h4>
    }

    if(isError){
        return <h4>Error...</h4>
    }


    let CoinHistory=history.map((point)=>(
        {
        date:new Date(point.timestamp*1000).toLocaleDateString(),
        price:point.price
        }
    ))

    // generating the colors based on prices
    let firstPrice=CoinHistory[0]?.price
    let lastPrice=CoinHistory[CoinHistory.length-1]?.price
    let color=firstPrice>=lastPrice?"green":"red"
    let stroke=firstPrice>=lastPrice?"green":"red"





    
  return (
    <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
        <div  className='card border shadow ' id={styles.areaChartcard} > 
            <h5 className='card-title  '>
            <img src={iconUrl} alt="" width={"30px"} height={"30px"} style={{borderRadius:"50px"}} className='ms-2 p-1' />
                <span className='ms-2'>{name}</span>
                
                </h5>
        <ResponsiveContainer >
        <AreaChart
         
          data={CoinHistory}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="date" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke={stroke} fill={color} fillOpacity={0.5} />
          <Area type={cardinal} dataKey="uv" stroke={stroke} fill={color} fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default CryptoAreaChart