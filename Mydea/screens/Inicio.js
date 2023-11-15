import * as React from 'react';
import { SafeAreaView, View, Text, Image, Button} from 'react-native';

function Inicio({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button title="Publicar negocio" onPress={() => navigation.navigate('Crear_negocio_info')}></Button>
        </SafeAreaView>
    );
}

export default Inicio;