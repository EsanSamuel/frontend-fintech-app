import React from 'react'

const detail ={
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 28599,
    "market_cap": 552741799920,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 600382897585,
    "total_volume": 19321399056,
    "high_24h": 28636,
    "low_24h": 27626,
    "price_change_24h": 486.86,
    "price_change_percentage_24h": 1.73183,
    "market_cap_change_24h": 8668162817,
    "market_cap_change_percentage_24h": 1.5932,
    "circulating_supply": 19333625,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 69045,
    "ath_change_percentage": -58.59257,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 42062.04603,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-03-31T22:23:40.795Z"
}

const Cardapi = ({image,name,symbol,market_cap_rank,current_price}) => {
  return (
    <div className='w-[200px] gap-3 h-auto border border-[#3a3a43] rounded p-10 bg-[#252525] text-white'>
       <img src={image} className='w-[30px]'/>
       <h1 className='mt-[10px]'><span className='text-[#aaaaaa]'>Name:</span> {name}({symbol})</h1>

       <h1 className='mt-[10px]'><span className='text-[#aaaaaa]'>Rank:</span>{market_cap_rank}</h1>
       <h1 className='mt-[10px]'><span className='text-[#aaaaaa]'>Price:</span>${current_price}</h1>
    </div>
  )
}

export default Cardapi