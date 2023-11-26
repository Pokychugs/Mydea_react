import * as React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useFonts } from 'expo-font';
import Imagen_perfil from './Imagenes/perfil_icono.png';

function Perfil_usuario({navigation}) {
    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return(
        <View>
            <Image style={styles.Imagen_perfil} source={Imagen_perfil}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    Imagen_perfil: {
        width: 150,
        height: 150,
        marginTop: 50,
    },
});

export default Perfil_usuario;