import { Dimensions, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import lab_logo from '../assets/header_logo.png'
import { LineChart } from "react-native-chart-kit";


const HomeScreen = () => {
  const datas = Array.from({ length: 151 }, (_, index) => index / 10);
    return (
      <SafeAreaView className="bg-white">
        <View className="flex-row pb-3 justify-between bg-gray-500 h-20">
          <Text className="font-bold text-xl text-white self-center">
            3 Phase Separator
          </Text>
          <Image
            source={lab_logo}
            className="h-12 w-48 align-middle bottom-2 self-center mt-6"
          />
        </View>
        <View className="flex justify-center">
          <LineChart
            data={{
              labels: Array.from({ length: 1000 }, (_, index) => index),
              datasets: [
                {
                  data: datas,
                },
              ],
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            // yAxisLabel="$"
            yAxisSuffix="m"
            // xAxisLabel="s"
            yAxisInterval={10} // optional, defaults to 1
            formatXLabel={(value) => (value % 150 == 0 ? value : "")}
            chartConfig={{
              // backgroundColor: "#FFFFFF",
              backgroundGradientFrom: "#ffb700",
              backgroundGradientTo: "#000000",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              // propsForDots: {
              //   r: "6",
              //   strokeWidth: "2",
              //   stroke: "#ffa726",
              // },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </SafeAreaView>
    );
}

export default HomeScreen;