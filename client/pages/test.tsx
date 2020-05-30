import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import {Theme} from '@nivo/core';

const test = () => {
	const data = [
		{
		  "country": "AD",
		  "hot dog": 183,
		  "hot dogColor": "hsl(282, 70%, 50%)",
		  "burger": 145,
		  "burgerColor": "hsl(286, 70%, 50%)",
		  "sandwich": 132,
		  "sandwichColor": "hsl(193, 70%, 50%)",
		  "kebab": 170,
		  "kebabColor": "hsl(22, 70%, 50%)",
		  "fries": 55,
		  "friesColor": "hsl(151, 70%, 50%)",
		  "donut": 102,
		  "donutColor": "hsl(306, 70%, 50%)"
		},
		{
		  "country": "AE",
		  "hot dog": 190,
		  "hot dogColor": "hsl(115, 70%, 50%)",
		  "burger": 114,
		  "burgerColor": "hsl(304, 70%, 50%)",
		  "sandwich": 54,
		  "sandwichColor": "hsl(22, 70%, 50%)",
		  "kebab": 141,
		  "kebabColor": "hsl(218, 70%, 50%)",
		  "fries": 114,
		  "friesColor": "hsl(97, 70%, 50%)",
		  "donut": 191,
		  "donutColor": "hsl(37, 70%, 50%)"
		},
		{
		  "country": "AF",
		  "hot dog": 9,
		  "hot dogColor": "hsl(92, 70%, 50%)",
		  "burger": 34,
		  "burgerColor": "hsl(288, 70%, 50%)",
		  "sandwich": 104,
		  "sandwichColor": "hsl(83, 70%, 50%)",
		  "kebab": 150,
		  "kebabColor": "hsl(202, 70%, 50%)",
		  "fries": 90,
		  "friesColor": "hsl(324, 70%, 50%)",
		  "donut": 50,
		  "donutColor": "hsl(153, 70%, 50%)"
		},
		{
		  "country": "AG",
		  "hot dog": 157,
		  "hot dogColor": "hsl(299, 70%, 50%)",
		  "burger": 78,
		  "burgerColor": "hsl(348, 70%, 50%)",
		  "sandwich": 158,
		  "sandwichColor": "hsl(301, 70%, 50%)",
		  "kebab": 168,
		  "kebabColor": "hsl(22, 70%, 50%)",
		  "fries": 175,
		  "friesColor": "hsl(246, 70%, 50%)",
		  "donut": 164,
		  "donutColor": "hsl(276, 70%, 50%)"
		},
		{
		  "country": "AI",
		  "hot dog": 80,
		  "hot dogColor": "hsl(108, 70%, 50%)",
		  "burger": 61,
		  "burgerColor": "hsl(337, 70%, 50%)",
		  "sandwich": 119,
		  "sandwichColor": "hsl(94, 70%, 50%)",
		  "kebab": 157,
		  "kebabColor": "hsl(224, 70%, 50%)",
		  "fries": 75,
		  "friesColor": "hsl(10, 70%, 50%)",
		  "donut": 190,
		  "donutColor": "hsl(33, 70%, 50%)"
		},
		{
		  "country": "AL",
		  "hot dog": 189,
		  "hot dogColor": "hsl(258, 70%, 50%)",
		  "burger": 127,
		  "burgerColor": "hsl(233, 70%, 50%)",
		  "sandwich": 175,
		  "sandwichColor": "hsl(142, 70%, 50%)",
		  "kebab": 52,
		  "kebabColor": "hsl(8, 70%, 50%)",
		  "fries": 31,
		  "friesColor": "hsl(143, 70%, 50%)",
		  "donut": 138,
		  "donutColor": "hsl(116, 70%, 50%)"
		},
		{
		  "country": "AM",
		  "hot dog": 153,
		  "hot dogColor": "hsl(347, 70%, 50%)",
		  "burger": 194,
		  "burgerColor": "hsl(63, 70%, 50%)",
		  "sandwich": 146,
		  "sandwichColor": "hsl(223, 70%, 50%)",
		  "kebab": 34,
		  "kebabColor": "hsl(117, 70%, 50%)",
		  "fries": 160,
		  "friesColor": "hsl(172, 70%, 50%)",
		  "donut": 21,
		  "donutColor": "hsl(308, 70%, 50%)"
		}
      ];
      
      const theme: Theme = {
        axis: {
            ticks: {
                text: {
                    fill: '#eeeeee',
                },
                
            },
            legend: {
                text: {
                    fill: '#eee'
                }
            }
        },
    };

	  return (
		<div style={{height: 300}}>
			<ResponsiveBar
                theme={theme}
				data={data}
				keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
				indexBy="country"
				margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
				padding={0.3}
				colors={{ scheme: 'nivo' }}
				defs={[
					{
						id: 'dots',
						type: 'patternDots',
						background: 'inherit',
						color: '#38bcb2',
						size: 4,
						padding: 1,
						stagger: true
					},
					{
						id: 'lines',
						type: 'patternLines',
						background: 'inherit',
						color: '#eed312',
						rotation: -45,
						lineWidth: 6,
						spacing: 10
					}
				]}
				fill={[
					{
						match: {
							id: 'fries'
						},
						id: 'dots'
					},
					{
						match: {
							id: 'sandwich'
						},
						id: 'lines'
					}
				]}
				borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'country',
					legendPosition: 'middle',
					legendOffset: 32,
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'food',
					legendPosition: 'middle',
					legendOffset: -40
				}}
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
				legends={[
					{
						dataFrom: 'keys',
						anchor: 'bottom-right',
						direction: 'column',
						justify: false,
						translateX: 120,
						translateY: 0,
						itemsSpacing: 2,
						itemWidth: 100,
						itemHeight: 20,
						itemDirection: 'left-to-right',
						itemOpacity: 0.85,
						symbolSize: 20,
						effects: [
							{
								on: 'hover',
								style: {
									itemOpacity: 1
								}
							}
						]
					}
				]}
				animate={true}
				motionStiffness={90}
				motionDamping={15}
			/>
		</div>
	  )
}

export default test;