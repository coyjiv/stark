import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignIn() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState<null | any>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "1:128411475610:android:bb5a4d09b3e7ec60cb8923",
    webClientId: "128411475610-oqmepvsmbt20g3h5h8levei0su07cd9f.apps.googleusercontent.com",
    expoClientId: "0af28c16-4885-4abe-bd4f-36ec2bfeadbd"
  });

  useEffect(() => {
    if (response?.type === "success") {
      response.authentication && setToken(response?.authentication?.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  return (
    <View style={styles.container}>
        <Button
          title="Sign in with Google"
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
