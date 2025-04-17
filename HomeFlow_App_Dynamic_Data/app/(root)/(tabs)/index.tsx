import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome To Homeflow</Text>
      <Link href="/Sign-In">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/Profile">Profile</Link>
      <Link href="/properties/1">Property 1</Link>

    </View>
  );
}
