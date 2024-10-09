
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from './assets/Pages/Home'
import {Password} from './assets/Pages/Password'

import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
    <Tab.Navigator>
        <Tab.Screen
        name = "Home" 
        component={Home}
        options={{headerShown: false,  //(Retirar Topo da Page "Password")
                 tabBarShowLabel: false,  //(Deixar Apenas Icones na TabBar)

            tabBarIcon: ({focused, size, color}) => {
                if(focused){
                    return <Ionicons size={size} color={"#0e0e0e"} name='home'/>
                }

                    return <Ionicons size={size} color={"#0e0e0e"} name='home-outline'/>

            }
        }} 
        />

        <Tab.Screen
        name = "Password"
        component={Password}
        options={{headerShown: false,  //(Retirar Topo da Page "Password")
                  tabBarShowLabel: false,  //(Deixar Apenas Icones na TabBar)

            tabBarIcon: ({focused, size}) => {
                if(focused){
                    return <Ionicons size={size} color={"#0e0e0e"} name='lock-closed'/>
                }

                    return <Ionicons size={size} color={"#0e0e0e"} name='lock-closed-outline'/>

            }
        }} 
        
        />

     </Tab.Navigator>

        
)}