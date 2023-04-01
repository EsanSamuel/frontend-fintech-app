import React,{useState} from 'react'
import {BarChart,LineChart} from '../components'
import {transact} from '../utils/index'

const Chart = () => {
    const [userData,setUserData] = useState({
        labels:transact.map((data)=> data.price),
        datasets:[{
            labels:'price',
            data:transact.map((data)=>data.amount),
            backgroundColor:[
                '#8c6dfd',
                '#8c6dfd',
                '#8c6dfd',
                '#8c6dfd',
                '#8c6dfd'
            ],
            borderColor:'black',
            borderWidth:2,
        }]
    })
  return (
    <div className='p-10 ]'>
        <BarChart chartData={userData} />
        <LineChart chartData={userData} />
    </div>
  )
}

export default Chart