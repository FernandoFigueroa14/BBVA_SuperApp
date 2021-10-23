import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';


//Carga de screens
import Loader from '../screens/Loader';
import view_login from '../screens/view_login';

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
            }
        }}
        >
            <Tab.Screen name="Home" component={Loader} />
            <Tab.Screen name="Home" component={view_login} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5Df0'
    }
})

export default Tabs;