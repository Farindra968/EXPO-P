import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppTabs() {
    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <View style={{ flex: 1, }}>
                <Text style={{ color: 'white' }}>App Tabs</Text>
            </View>
        </SafeAreaView>

    )
}