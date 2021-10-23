import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';


//Carga de screens
import Cuenta from '../screens/Cuenta';
import Fastpay from '../screens/FastPay';
import Home from '../screens/Home';
import Inversiones from '../screens/Inversiones';
import Loader from '../screens/Loader';
import Login from '../screens/Login';
import Movimientos from '../screens/Movimientos';
import PagoServicios from '../screens/PagoServicios';
import Perfil from '../screens/Perfil';
import SaludFinanciera from '../screens/SaludFinanciera';
import ScanQR from '../screens/ScanQR';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style:{
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height:90,
                ... styles.shadow
            }
        }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({focused}) =>(
                    <View>
                        <Image source={require('../Front_Design/Icons/home(1).png')}
                        />
                        <Text>HOME</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="SaludFinanciera" component={SaludFinanciera} />
            <Tab.Screen name="Fastpay" component={Fastpay} />
            <Tab.Screen name="Inversiones" component={Inversiones} />
            <Tab.Screen name="PagoServicios" component={PagoServicios} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5Df0',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;