import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    ImageBackground, 
    KeyboardAvoidingView,
} from 'react-native';

//https://www.hongkiat.com/blog/mobile-login-signup-form-examples/
//<ImageBackground source={require('../../assets/pexels-alexander-ant-7004697.jpg')} style={styles.background} resizeMode="cover">
var color1 = '#FFA62F'

export default function Homepage() {

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.header1}>ChatMe</Text>
        <Text style={styles.header2}>Hello there!</Text>
        <Text style={styles.header2}>Welcome Back</Text>
        <TextInput 
            style={styles.formLine1}
            placeholder="Email address"
            autoCorrect={false}
            clearButtonMode='while-editing'
            keyboardType='email-address'
            autoComplete='email'
            returnKeyType='send'
            textContentType='emailAddress'
            />
        <TouchableOpacity
            style={styles.submit}>
            <Text>Submit</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    marginLeft: "10%",
    marginRight: "10%",
    backgroundColor: 'white',
    marginTop: "50%",
    marginBottom: "25%",
    justifyContent: 'space-between',
  },
  header1: {
    flex: 1,
    fontSize: 30,
    fontWeight: "900",
    color: color1,
    textAlign: 'left',
  },
  header2: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
  },
  formLine1: {
    flex: 1,
    fontSize: 20,
    fontWeight: "900",
    borderBottomWidth: 2,
    borderBottomColor: "#696969",
    marginBottom: "10%",
    color: color1,

  },
  submit: {
    flex: 0,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: color1,
    padding: "5%",
  },

  /*background: {
      flex: 1,
      justifyContent: "center",
      
  }
  */
});
