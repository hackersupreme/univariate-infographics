import React from 'react'

import { PieChart, BarChart, PieSlice, HorizontalBar, VerticalBar, Bullet, BulletChart } from 'univariate-infographics'
import 'univariate-infographics/dist/index.css'

const data = [
	{
		value: 1
	},
	{
		value: 3
	},
	{
		value: 6
	},
	{
		value: 4
	},
	{
		value: 2
	},
]


const App = () => {
  return (
  	<main style={{display: 'flex', flexWrap: 'wrap', width: '450px'}}>
	  	<BarChart 
	  		data={data}
	  		width={400}
	  		height={200}
	  		barWidth={30}
			overlay
	  		style={{fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px'}}
	  	/>
  	</main>
  )
}

export default App
