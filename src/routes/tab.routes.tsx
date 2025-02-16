import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//para colocar icones na borda de navegação
import { Feather } from '@expo/vector-icons';

import Feed from '../pages/Feed';
import New from '../pages/New';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

//usando bottom-tab (barra de navegação na parte de baixo)
export default function TabRoutes() {
    return( 
        //esconde o cabeçalho que é gerado quando starta o projeto (primeiro passo foi bottom-tab)
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="feed"
                component={Feed}
                options={{
                    //nos () desestrutura assim pode aumentar a cor e o tamanho
                    tabBarIcon: ( { color, size } ) => <Feather name="home" color={color} size={size}/>,
                    tabBarLabel: 'Início'
                }}
            />

            <Tab.Screen
                name="new"
                component={New}
                options={{
                    tabBarIcon: ( { color, size } ) => <Feather name="plus" color={color} size={size}/>,
                    tabBarLabel: 'Novo'
                }}
            />

        </Tab.Navigator>
    )
}