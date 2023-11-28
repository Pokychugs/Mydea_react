import * as React from 'react';
import { View, Text, Image, Button} from 'react-native';

function Inicio({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button title="Publicar negocio" onPress={() => navigation.navigate('Crear_negocio_info')}></Button>
        </View>
    );
}

export default Inicio;