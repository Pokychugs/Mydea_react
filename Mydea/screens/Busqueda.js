import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function Busqueda({ route }) {
    const { negocios } = route.params;

    return (
        <View style={styles.container}>
            <FlatList
                data={negocios}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.nombre}</Text>
                        <Text>{item.categoria}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    item: {
        
    },
    title: {
        
    },
});

export default Busqueda;