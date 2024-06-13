import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";


GoogleSignin.configure({
  webClientId: "132384027579-21ge13tlekrubglbi9i479qe2bh1bk9a.apps.googleusercontent.com",
});

export default function Login() {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      // Usando type assertion para especificar que error é do tipo Error & { code?: string }
      const typedError = error as Error & { code?: string };
    
      if (typedError.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (typedError.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (typedError.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        console.error(typedError.message);
      }
    }
  }
  

  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn}
    />
  );
}
