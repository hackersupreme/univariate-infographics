import React from 'react'

import { PieChart, BarChart, PieSlice, HorizontalBar, VerticalBar } from 'univariate-infographics'

const data = [
	{
		value: 1
	},
	{
		value: 2
	},
	{
		value: 6
	},
	{
		value: 4
	},
	{
		value: 2
	}
]


const App = () => {
  return (
  	<main style={{display: 'flex', flexDirection: 'column'}}>
  		<PieChart
	  		data={data}
	  	/>
	  	<PieSlice
	  		data={data}
	  	/>
	  	<BarChart 
	  		data={data}
	  	/>
	  	<HorizontalBar 
	  		data={data}
	  	/>
	  	<VerticalBar 
	  		data={data}
	  	/>
  	</main>
  )
}

export default App
