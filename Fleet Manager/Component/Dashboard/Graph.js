import { View, Text } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("screen").width - 33;
import { BarChart } from "react-native-chart-kit";

const Graph = () => {
  const data = {
    labels: [0, 1, 2, 3, 4, 5],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",

    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
  };
  const graphStyle = {
    BarChart,
  };

  return (
    <BarChart
      style={graphStyle}
      data={data}
      width={screenWidth}
      height={220}
      yAxisLabel="$"
      chartConfig={chartConfig}
      showValuesOnTopOfBars={true}
    ></BarChart>
  );
};

export default Graph;
