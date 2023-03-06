import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  import React from 'react';
  import {
      Text,
      View,
      Image,
      ScrollView,
      TouchableOpacity,
      Dimensions
  }from 'react-native';


  const  Charts = () => {

  const chartConfig = {
        backgroundGradientFrom: '#2b2b2b',
        backgroundGradientTo: '#2b2b2b',
        useShadowColorFromDataset: true,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      };

      const data = {
        labels: ["Swim", "Bike", "Run"],
        data: [0.4, 0.6, 0.8]
      };


    return(
    <View>
        <ProgressChart
        data={data}
        width={300}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
        />
    </View>
    );
  }

  export default Charts;
