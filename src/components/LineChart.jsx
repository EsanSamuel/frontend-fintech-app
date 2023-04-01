import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const LineChart = ({chartData}) => {
  return (
    <div className='mt-[70px]'>
        <Line data={chartData} />
    </div>
  )
}

export default LineChart