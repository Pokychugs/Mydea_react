import { useFonts } from 'expo-font';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Aviso_privacidad({navigation}) {
    const [fontsLoaded] = useFonts({
        'poppins-regular': require('./fonts/Poppins/Poppins-Regular.ttf'),
    });

    const items = [
        '•	Publicar negocios.',
        '•	Brindar una opinión sobre los negocios.',
        '•	Evaluar la calidad del servicio que le brindamos.'
    ];

    const items_2 = [
        '·	Nombre.',
        '·	Apellido.',
        '·	Correo electrónico.',
        '·	Número telefónico.',
        '·	Dirección del negocio'
    ];

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Aviso de Privacidad</Text>
                <View>
                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>RESPONSABLE</Text>
                    <Text style={styles.texto}>MYDEA con portal de internet [dirección] es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.</Text>
                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>FINES DE SUS DATOS PERSONALES</Text>
                    <Text style={styles.texto}>Su información personal será utilizada para proveer los siguientes servicios:</Text>
                    {items.map((item, index) => (
                        <View key={index} style={{ paddingHorizontal: 15 }}>
                            <Text style={styles.texto}>{item}</Text>
                        </View>
                    ))}
                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>DATOS PERSONALES REQUERIDOS</Text>
                    <Text style={styles.texto}>Para las finalidades antes mencionadas, requerimos obtener los siguientes datos personales: </Text>
                    {items_2.map((item, index) => (
                        <View key={index} style={{ paddingHorizontal: 15 }}>
                            <Text style={styles.texto}>{item}</Text>
                        </View>
                    ))}
                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>COMO PUEDE ACCEDER, RECTIFICAR O CANCELAR SUS DATOS PERSONALES</Text>
                    <Text style={styles.texto}>Usted tiene derecho de acceder, rectificar y cancelar sus datos personales, así como de oponerse al tratamiento de los mismos o revocar el consentimiento que para tal fin nos haya otorgado, a través de los procedimientos que hemos implementado. Para conocer dichos procedimientos, los requisitos y plazos, se puede poner en contacto con nuestro departamento de datos personales en [correo electrónico].</Text>
                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>CAMBIOS EN EL AVISO DE PRIVACIDAD</Text>
                    <Text style={styles.texto}>El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones debido a nuevos requerimientos legales o por necesidades propias sobre los servicios. Nos comprometemos a mantener siempre actualizado este aviso de privacidad y siempre podrá consultar las actualizaciones que existan en [dirección].</Text>
                    <Text style={styles.texto}>Ultima actualización: 26/09/2023.</Text>
                </View>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Registro')}>
                    <Text style={styles.texto_boton}>Regresar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 10,
        top: 50,
    },
    title: {
        fontFamily: 'poppins-regular',
        fontSize: 40,
        marginTop: 10,
        color: '#000',
        margin: 10,
        textAlign: 'justify',
    },
    texto: {
        fontFamily: 'poppins-regular',
        fontSize: 20,
        marginBottom: 10,
        marginHorizontal: 20,
        textAlign: 'justify',
    },
    boton: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#000',
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        height: 50,
        marginTop: 6,
        marginBottom: 50,
        elevation: 4,
    },
    texto_boton: {
        color: '#fff',
        fontFamily: 'poppins-regular',
        fontSize: 20,
        marginHorizontal: 5,
        fontWeight: 'bold',
    },
});

export default Aviso_privacidad;