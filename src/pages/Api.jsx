import React, { useState, useEffect } from 'react'
import { Cardapi,Loader} from '../components'

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const Api = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, [])

  return (
    <div>
      {data?.length > 0 ? (
        <div className='flex w-full flex-wrap p-10 '>
        {
          data.map((datax) => (
            <Cardapi key={datax.id} {...datax} />
          ))
        }
        </div>
      ) : (
        <div className='text-center mt-[50px]'>
        <Loader />
        </div>
      )}
    </div>
  )
}

export default Api