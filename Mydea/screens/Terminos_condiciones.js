import { useFonts } from 'expo-font';
import { View ,Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


function Terminos_condiciones({navigation}) {
    const [fontsLoaded] = useFonts({
        'poppins-regular': require('./fonts/Poppins/Poppins-Regular.ttf'),
    });

    const items = [
        '•  Utilizar MYDEA para cualquier propósito ilegal.',
        '•  Modificar o alterar cualquier parte del sitio web.',
        '•	Proporcionar información falsa sobre los negocios.',,
        '•	Proporcionar información personal falsa.',
        '•	Robar la identidad de algún negocio o usuario'
    ];
    
    const items_2 = [
        '•	Tienes derecho a publicar comentarios en nuestra aplicación móvil y tienes todas las licencias y consentimientos necesarios para hacerlo.',
        '•	Los comentarios no invaden ningún derecho de propiedad intelectual, incluidos, entre otros, los derechos de autor, patentes o marcas comerciales de terceros.',
        '•	Los comentarios no contienen ningún material difamatorio, calumnioso, ofensivo, indecente o ilegal de otro modo, que sea una invasión de la privacidad.',
        '•	Los comentarios no se utilizarán para solicitar o promover negocios o actividades comerciales personalizadas o presentes o actividades ilegales.'
    ];

    const items_3 = [
        '•	Agencias gubernamentales.',
        '•	Motores de búsqueda.',
        '•	Organizaciones de noticias.',
        '•	Los distribuidores de directorios en línea pueden vincularse a nuestra aplicación móvil de la misma manera que hacen hipervínculos a los sitios web de otras empresas que figuran en la lista; y',
        '•	Empresas acreditadas en todo el sistema, excepto que soliciten organizaciones sin fines de lucro, centros comerciales de caridad y grupos de recaudación de fondos de caridad que no pueden hacer hipervínculos a nuestro sitio web.'
    ];

    const items_4 = [
        '•	Fuentes de información de consumidores y/o empresas comúnmente conocidas;',
        '•	sitios de la comunidad .com;',
        '•	asociaciones u otros grupos que representan organizaciones benéficas;',
        '•	distribuidores de directorios en línea;',
        '•	portales de Internet;',
        '•	firmas de contabilidad, derecho y consultoría; y',
        '•	instituciones educativas y asociaciones comerciales.'
    ];

    const items_5 = [
        '•	Mediante el uso de nuestro nombre corporativo; ',
        '•	Mediante el uso del localizador uniforme de recursos al que se está vinculando; o',
        '•	Usar cualquier otra descripción de nuestro sitio web al que está vinculado que tenga sentido dentro del contexto y formato del contenido en el sitio de la parte vinculante.',
    ];

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Términos y Condiciones</Text>
                <View>
                    <Text style={styles.texto}>Bienvenido a MYDEA</Text>
                    <Text style={styles.texto}>Al acceder a está aplicación móvil, asumimos que aceptas estos términos y condiciones. No continúes usando MYDEA si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.</Text>
                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>Licencia:</Text>
                    <Text style={styles.texto}>A menos que se indique lo contrario, ETHEV y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en MYDEA. Todos los derechos de propiedad intelectual son reservados. Puedes acceder a MYDEA para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.</Text>
                    <Text style={styles.texto}>No debes: </Text>
                    {items.map((item, index) => (
                        <View key={index} style={{ paddingHorizontal: 15 }}>
                            <Text style={styles.texto}>{item}</Text>
                        </View>
                    ))}
                    <Text style={styles.texto}>Partes de esta aplicación móvil ofrecen a los usuarios la oportunidad de publicar e intercambiar opiniones e sobre los negocios publicados. MYDEA no editará los comentarios en el sitio web a no ser que estos contengan contenido ofensivo. Los comentarios no reflejan los puntos de vista ni las opiniones de MYDEA, sus agentes y/o afiliados. Los comentarios reflejan los puntos de vista y opiniones de las personas sobre los negocios. </Text>
                    <Text style={styles.texto}>MYDEA se reserva el derecho de monitorear todos los comentarios y eliminar los que puedan considerarse inapropiados, ofensivos o que incumplan estos Términos y Condiciones.</Text>
                    <Text style={styles.texto}>Garantizas y declaras que:</Text>
                    {items_2.map((item, index) => (
                        <View key={index} style={{ paddingHorizontal: 15 }}>
                            <Text style={styles.texto}>{item}</Text>
                        </View>
                    ))}
                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>Hipervínculos a nuestro contenido:</Text>
                    <Text style={styles.texto}>Las siguientes organizaciones pueden vincularse a nuestro sitio web con aprobación previa por escrito:</Text>
                    {items_3.map((item, index) => (
                        <View key={index} style={{ paddingHorizontal: 15 }}>
                            <Text style={styles.texto}>{item}</Text>
                        </View>
                    ))}
                    <Text style={styles.texto}>Estas organizaciones pueden enlazar a nuestra página de inicio, a publicaciones o a otra información del sitio siempre que el enlace: (a) no sea engañoso de ninguna manera; (b) no implique falsamente patrocinio, respaldo o aprobación de la parte vinculante y sus productos y/o servicios; y (c) encaja en el contexto del sitio de la parte vinculante.</Text>
                    <Text style={styles.texto}>Podemos considerar y aprobar otras solicitudes de enlaces de los siguientes tipos de organizaciones:</Text>
                    {items_4.map((item, index) => (
                        <View key={index} style={{ paddingHorizontal: 15 }}>
                            <Text style={styles.texto}>{item}</Text>
                        </View>
                    ))}
                    <Text style={styles.texto}>Aprobaremos las solicitudes de enlace de estas organizaciones si: (a) el enlace no nos haría vernos desfavorablemente a nosotros mismos ni a nuestras empresas acreditadas; (b) la organización no tiene registros negativos con nosotros; (c) el beneficio para nosotros de la visibilidad del hipervínculo compensa la ausencia de ETHEV; y (d) el enlace está en el contexto de información general de recursos.</Text>
                    <Text style={styles.texto}>Estas organizaciones pueden enlazar a nuestra página de inicio siempre que el enlace: (a) no sea engañoso de ninguna manera; (b) no implique falsamente patrocinio, respaldo o aprobación de la parte vinculante y sus productos o servicios; y (c) encaja en el contexto del sitio de la parte vinculante.</Text>
                    <Text style={styles.texto}>Si eres una de las organizaciones enumeradas en el párrafo 2 y estás interesada en vincularte a nuestro sitio web, debes informarnos enviando un correo electrónico a ETHEV. Incluye tu nombre, el nombre de tu organización, la información de contacto, así como la URL de tu sitio, una lista de las URL desde las que tienes la intención de vincular a nuestro sitio web y una lista de las URL de nuestro sitio a las que te gustaría acceder. Espera un par de semanas para recibir una respuesta.</Text>
                    <Text style={styles.texto}>Las organizaciones aprobadas pueden hacer hipervínculos a nuestro sitio web de la siguiente manera:</Text>
                    {items_5.map((item, index) => (
                        <View key={index} style={{ paddingHorizontal: 15 }}>
                            <Text style={styles.texto}>{item}</Text>
                        </View>
                    ))}
                    <Text style={styles.texto}>No se permitirá el uso del logotipo de MYDEA u otro material gráfico para vincular sin un acuerdo de licencia de marca comercial.</Text>
                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>Reserva de derechos:</Text>
                    <Text style={styles.texto}>Nos reservamos el derecho de solicitar que elimines todos los enlaces o cualquier enlace en particular a nuestro sitio web. Apruebas eliminar de inmediato todos los enlaces a nuestro sitio web cuando se solicite. También nos reservamos el derecho de modificar estos términos y condiciones y su política de enlaces en cualquier momento. Al vincular continuamente a nuestro sitio web, aceptas estar vinculado y seguir estos términos y condiciones de vinculación.</Text>
                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>Responsabilidad del contenido:</Text>
                    <Text style={styles.texto}>No seremos responsables de ningún contenido que aparezca en los negocios. Aceptas protegernos y defendernos contra todas las reclamaciones que se presenten a tu negocio. Ningún enlace(s) debe aparecer en alguna publicación que pueda interpretarse como difamatorio, obsceno o criminal, o que infrinja, de otra manera viole o defienda la infracción u otra violación de los derechos de terceros.</Text>
                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>Eliminación de enlaces de nuestro sitio web:</Text>
                    <Text style={styles.texto}>Si encuentras algún enlace en nuestro sitio que sea ofensivo por cualquier motivo, puedes contactarnos e informarnos en cualquier momento. Consideraremos las solicitudes para eliminar enlaces, pero no estamos obligados a hacerlo ni a responder directamente.</Text>
                    <Text style={styles.texto}>No nos aseguramos de que la información de este sitio web sea correcta. No garantizamos su integridad o precisión, ni prometemos asegurarnos de que el sitio web permanezca disponible o que el material en el sitio se mantenga actualizado.</Text>
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

export default Terminos_condiciones;