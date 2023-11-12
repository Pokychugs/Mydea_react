import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Inicio from './screens/Inicio';
import Header from './screens/Header';


const Stack = createNativeStackNavigator();


export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={Inicio} 
                options={{
                    headerTitle: (props) => <Header/>,
                    headerTitleAlign: 'center',
                }}
            />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
