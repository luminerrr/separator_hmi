const { View } = require("react-native")
const { SafeAreaView } = require("react-native-safe-area-context")

const Home = () => {
    return(
        <SafeAreaView>
            <View>
                <Text>
                    This is homescreen HMI
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Home;