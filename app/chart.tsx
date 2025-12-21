import { Dimensions, Text, View } from "react-native";
import { LineChart, PieChart, ProgressChart } from 'react-native-chart-kit';

export default function Chart() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };
  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };
  const screenWidth = Dimensions.get("window").width;

  const pieData = [
    { name: "Red", population: 45, color: "#f00", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Blue", population: 30, color: "#00f", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Yellow", population: 25, color: "#ff0", legendFontColor: "#7F7F7F", legendFontSize: 12 },
  ];

  const progressData = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.6, 0.8, 0.4],
  };

  return (
    <View style={{ flex: 1 , padding : 10 }}>            
            <Text style={{ fontSize : 20 }}>
                Bezier Line Chart
            </Text>
            <LineChart
                data={data}
                width={screenWidth-20} // from react-native
                height={220}
                chartConfig={chartConfig}
                bezier={true}
                style={{
                    marginVertical : 10,
                    borderRadius: 15
                }}
            />
            <Text style={{ fontSize: 20, marginTop: 8 }}>Pie Chart</Text>
            <PieChart
              data={pieData}
              width={screenWidth - 20}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              absolute
            />
            <Text style={{ fontSize: 20, marginTop: 8 }}>Progress Chart</Text>
            <ProgressChart
              data={progressData}
              width={screenWidth - 20}
              height={220}
              strokeWidth={16}
              radius={32}
              chartConfig={chartConfig}
              hideLegend={false}
              style={{ marginVertical: 10 }}
            />
        </View>

  );
}
