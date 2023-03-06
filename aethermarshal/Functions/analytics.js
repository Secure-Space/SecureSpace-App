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


  const  Analytics = () => {


    const chartConfig = {
        backgroundGradientFrom: '#2b2b2b',
        backgroundGradientTo: '#2b2b2b',
        useShadowColorFromDataset: true,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      };

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
        datasets: [
          {
            data: [20, 40, 25, 80, 100, 45],
            color: (opacity = 1) => `rgba(255, 189, 89, ${opacity})`,
            strokeWidth: 2
          }
        ],
        legend: ["Frequency of Use"]
      };


    return(
    <View>
        <LineChart
            data={data}
            width={340}
            height={230}
            chartConfig={chartConfig}
            style={{
                borderRadius: 30,
            }}
        />
    </View>
    );
  }

  export default Analytics;
