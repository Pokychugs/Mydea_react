import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Platform} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Checkbox } from "native-base";

const data_3 = [
    { label: 'Lunes', value: '1' },
    { label: 'Martes', value: '2' },
    { label: 'Miércoles', value: '3' },
    { label: 'Jueves', value: '4' },
    { label: 'Viernes', value: '5' },
    { label: 'Sábado', value: '6' },
    { label: 'Domingo', value: '7' },
];

function Horarios(){

    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    const [selectedDay, setSelectedDay] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [hora, setHora] = useState(new Date());
    const [horario, setHorario] = useState("");
    const [showPicker, setShowPicker] = useState(false);

    const [hora_2, setHora_2] = useState(new Date());
    const [horario_2, setHorario_2] = useState("");
    const [showPicker_2, setShowPicker_2] = useState(false);

    const [hora_3, setHora_3] = useState(new Date());
    const [horario_3, setHorario_3] = useState("");
    const [showPicker_3, setShowPicker_3] = useState(false);

    const [hora_4, setHora_4] = useState(new Date());
    const [horario_4, setHorario_4] = useState("");
    const [showPicker_4, setShowPicker_4] = useState(false);

    const [hora_5, setHora_5] = useState(new Date());
    const [horario_5, setHorario_5] = useState("");
    const [showPicker_5, setShowPicker_5] = useState(false);

    const [hora_6, setHora_6] = useState(new Date());
    const [horario_6, setHorario_6] = useState("");
    const [showPicker_6, setShowPicker_6] = useState(false);

    const [hora_7, setHora_7] = useState(new Date());
    const [horario_7, setHorario_7] = useState("");
    const [showPicker_7, setShowPicker_7] = useState(false);

    const [hora_8, setHora_8] = useState(new Date());
    const [horario_8, setHorario_8] = useState("");
    const [showPicker_8, setShowPicker_8] = useState(false);

    const [hora_9, setHora_9] = useState(new Date());
    const [horario_9, setHorario_9] = useState("");
    const [showPicker_9, setShowPicker_9] = useState(false);

    const [hora_10, setHora_10] = useState(new Date());
    const [horario_10, setHorario_10] = useState("");
    const [showPicker_10, setShowPicker_10] = useState(false);

    const [hora_11, setHora_11] = useState(new Date());
    const [horario_11, setHorario_11] = useState("");
    const [showPicker_11, setShowPicker_11] = useState(false);

    const [hora_12, setHora_12] = useState(new Date());
    const [horario_12, setHorario_12] = useState("");
    const [showPicker_12, setShowPicker_12] = useState(false);

    const [hora_13, setHora_13] = useState(new Date());
    const [horario_13, setHorario_13] = useState("");
    const [showPicker_13, setShowPicker_13] = useState(false);

    const [hora_14, setHora_14] = useState(new Date());
    const [horario_14, setHorario_14] = useState("");
    const [showPicker_14, setShowPicker_14] = useState(false);

    const [diaCerrado, setDiaCerrado] = useState(false);
    const [sinHorarioEspecifico, setSinHorarioEspecifico] = useState(false);

    const [diaCerrado_2, setDiaCerrado_2] = useState(false);
    const [sinHorarioEspecifico_2, setSinHorarioEspecifico_2] = useState(false);

    const [diaCerrado_3, setDiaCerrado_3] = useState(false);
    const [sinHorarioEspecifico_3, setSinHorarioEspecifico_3] = useState(false);

    const [diaCerrado_4, setDiaCerrado_4] = useState(false);
    const [sinHorarioEspecifico_4, setSinHorarioEspecifico_4] = useState(false);

    const [diaCerrado_5, setDiaCerrado_5] = useState(false);
    const [sinHorarioEspecifico_5, setSinHorarioEspecifico_5] = useState(false);

    const [diaCerrado_6, setDiaCerrado_6] = useState(false);
    const [sinHorarioEspecifico_6, setSinHorarioEspecifico_6] = useState(false);

    const [diaCerrado_7, setDiaCerrado_7] = useState(false);
    const [sinHorarioEspecifico_7, setSinHorarioEspecifico_7] = useState(false);
    

    if (!fontsLoaded) {
        return undefined;
    }

    const togglePicker = () => {
        setShowPicker(!showPicker);
    };
    const togglePicker_2 = () => {
        setShowPicker_2(!showPicker_2);
    };
    const togglePicker_3 = () => {
        setShowPicker_3(!showPicker_3);
    };
    const togglePicker_4 = () => {
        setShowPicker_4(!showPicker_4);
    };
    const togglePicker_5 = () => {
        setShowPicker_5(!showPicker_5);
    };
    const togglePicker_6 = () => {
        setShowPicker_6(!showPicker_6);
    };
    const togglePicker_7 = () => {
        setShowPicker_7(!showPicker_7);
    };
    const togglePicker_8 = () => {
        setShowPicker_8(!showPicker_8);
    };
    const togglePicker_9 = () => {
        setShowPicker_9(!showPicker_9);
    };
    const togglePicker_10 = () => {
        setShowPicker_10(!showPicker_10);
    };
    const togglePicker_11 = () => {
        setShowPicker_11(!showPicker_11);
    };
    const togglePicker_12 = () => {
        setShowPicker_12(!showPicker_12);
    };
    const togglePicker_13 = () => {
        setShowPicker_13(!showPicker_13);
    };
    const togglePicker_14 = () => {
        setShowPicker_14(!showPicker_14);
    };

    const onChange = ({type}, horaSeleccionada) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada;
            setHora(horaActual);

            if(Platform.OS === 'android'){
                togglePicker();
                setHorario(horaFormato(horaActual));
            }
        }else{
            togglePicker();
        }
    };
    const onChange_2 = ({type}, horaSeleccionada_2) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_2;
            setHora_2(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_2();
                setHorario_2(horaFormato(horaActual));
            }
        }else{
            togglePicker_2();
        }
    };
    const onChange_3 = ({type}, horaSeleccionada_3) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_3;
            setHora_3(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_3();
                setHorario_3(horaFormato(horaActual));
            }
        }else{
            togglePicker_3();
        }
    };
    const onChange_4 = ({type}, horaSeleccionada_4) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_4;
            setHora_4(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_4();
                setHorario_4(horaFormato(horaActual));
            }
        }else{
            togglePicker_4();
        }
    };
    const onChange_5 = ({type}, horaSeleccionada_5) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_5;
            setHora_5(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_5();
                setHorario_5(horaFormato(horaActual));
            }
        }else{
            togglePicker_5();
        }
    };
    const onChange_6 = ({type}, horaSeleccionada_6) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_6;
            setHora_6(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_6();
                setHorario_6(horaFormato(horaActual));
            }
        }else{
            togglePicker_6();
        }
    };
    const onChange_7 = ({type}, horaSeleccionada_7) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_7;
            setHora_7(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_7();
                setHorario_7(horaFormato(horaActual));
            }
        }else{
            togglePicker_7();
        }
    };
    const onChange_8 = ({type}, horaSeleccionada_8) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_8;
            setHora_8(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_8();
                setHorario_8(horaFormato(horaActual));
            }
        }else{
            togglePicker_8();
        }
    };
    const onChange_9 = ({type}, horaSeleccionada_9) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_9;
            setHora_9(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_9();
                setHorario_9(horaFormato(horaActual));
            }
        }else{
            togglePicker_9();
        }
    };
    const onChange_10 = ({type}, horaSeleccionada_10) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_10;
            setHora_10(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_10();
                setHorario_10(horaFormato(horaActual));
            }
        }else{
            togglePicker_10();
        }
    };
    const onChange_11 = ({type}, horaSeleccionada_11) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_11;
            setHora_11(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_11();
                setHorario_11(horaFormato(horaActual));
            }
        }else{
            togglePicker_11();
        }
    };
    const onChange_12 = ({type}, horaSeleccionada_12) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_12;
            setHora_12(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_12();
                setHorario_12(horaFormato(horaActual));
            }
        }else{
            togglePicker_12();
        }
    };
    const onChange_13 = ({type}, horaSeleccionada_13) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_13;
            setHora_13(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_13();
                setHorario_13(horaFormato(horaActual));
            }
        }else{
            togglePicker_13();
        }
    };
    const onChange_14 = ({type}, horaSeleccionada_14) => {
        if(type == 'set'){
            const horaActual = horaSeleccionada_14;
            setHora_14(horaActual);

            if(Platform.OS === 'android'){
                togglePicker_14();
                setHorario_14(horaFormato(horaActual));
            }
        }else{
            togglePicker_14();
        }
    };

    const horaIos = () => {
        setHorario(horaFormato(hora));
        togglePicker();
    };
    const horaIos_2 = () => {
        setHorario_2(horaFormato(hora_2));
        togglePicker_2();
    };
    const horaIos_3 = () => {
        setHorario_3(horaFormato(hora_3));
        togglePicker_3();
    };
    const horaIos_4 = () => {
        setHorario_4(horaFormato(hora_4));
        togglePicker_4();
    };
    const horaIos_5 = () => {
        setHorario_5(horaFormato(hora_5));
        togglePicker_5();
    };
    const horaIos_6 = () => {
        setHorario_6(horaFormato(hora_6));
        togglePicker_6();
    };
    const horaIos_7 = () => {
        setHorario_7(horaFormato(hora_7));
        togglePicker_7();
    };
    const horaIos_8 = () => {
        setHorario_8(horaFormato(hora_8));
        togglePicker_8();
    };
    const horaIos_9 = () => {
        setHorario_9(horaFormato(hora_9));
        togglePicker_9();
    };
    const horaIos_10 = () => {
        setHorario_10(horaFormato(hora_10));
        togglePicker_10();
    };
    const horaIos_11 = () => {
        setHorario_11(horaFormato(hora_11));
        togglePicker_11();
    };
    const horaIos_12 = () => {
        setHorario_12(horaFormato(hora_12));
        togglePicker_12();
    };
    const horaIos_13 = () => {
        setHorario_13(horaFormato(hora_13));
        togglePicker_13();
    };
    const horaIos_14 = () => {
        setHorario_14(horaFormato(hora_14));
        togglePicker_14();
    };

    const horaFormato = (date) => {
        const hours = date.getHours();
        const minutes = `0${date.getMinutes()}`.slice(-2);
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes} ${ampm}`;
    };

    const handleDíaCerradoToggle = () => {
        setDiaCerrado(!diaCerrado);
        setSinHorarioEspecifico(false);
        setHorario('');
        setHorario_2('');
        setShowPicker(false);
        setShowPicker_2(false);
    };
    const handleDíaCerradoToggle_2 = () => {
        setDiaCerrado_2(!diaCerrado_2);
        setSinHorarioEspecifico_2(false);
        setHorario_3('');
        setHorario_4('');
        setShowPicker_3(false);
        setShowPicker_4(false);
    };
    const handleDíaCerradoToggle_3 = () => {
        setDiaCerrado_3(!diaCerrado_3);
        setSinHorarioEspecifico_3(false);
        setHorario_5('');
        setHorario_6('');
        setShowPicker_5(false);
        setShowPicker_6(false);
    };
    const handleDíaCerradoToggle_4 = () => {
        setDiaCerrado_4(!diaCerrado_4);
        setSinHorarioEspecifico_4(false);
        setHorario_7('');
        setHorario_8('');
        setShowPicker_7(false);
        setShowPicker_8(false);
    };
    const handleDíaCerradoToggle_5 = () => {
        setDiaCerrado_5(!diaCerrado_5);
        setSinHorarioEspecifico_5(false);
        setHorario_9('');
        setHorario_10('');
        setShowPicker_9(false);
        setShowPicker_10(false);
    };
    const handleDíaCerradoToggle_6 = () => {
        setDiaCerrado_6(!diaCerrado_6);
        setSinHorarioEspecifico_6(false);
        setHorario_11('');
        setHorario_12('');
        setShowPicker_11(false);
        setShowPicker_12(false);
    };
    const handleDíaCerradoToggle_7 = () => {
        setDiaCerrado_7(!diaCerrado_7);
        setSinHorarioEspecifico_7(false);
        setHorario_13('');
        setHorario_14('');
        setShowPicker_13(false);
        setShowPicker_14(false);
    };

    const handleSinHorarioEspecificoToggle = () => {
        setSinHorarioEspecifico(!sinHorarioEspecifico);
        setDiaCerrado(false);
        setHorario('');
        setHorario_2('');
        setShowPicker(false);
        setShowPicker_2(false);
    };
    const handleSinHorarioEspecificoToggle_2 = () => {
        setSinHorarioEspecifico_2(!sinHorarioEspecifico_2);
        setDiaCerrado_2(false);
        setHorario_3('');
        setHorario_4('');
        setShowPicker_3(false);
        setShowPicker_4(false);
    };
    const handleSinHorarioEspecificoToggle_3 = () => {
        setSinHorarioEspecifico_3(!sinHorarioEspecifico_3);
        setDiaCerrado_3(false);
        setHorario_5('');
        setHorario_6('');
        setShowPicker_5(false);
        setShowPicker_6(false);
    };
    const handleSinHorarioEspecificoToggle_4 = () => {
        setSinHorarioEspecifico_4(!sinHorarioEspecifico_4);
        setDiaCerrado_4(false);
        setHorario_7('');
        setHorario_8('');
        setShowPicker_7(false);
        setShowPicker_8(false);
    };
    const handleSinHorarioEspecificoToggle_5 = () => {
        setSinHorarioEspecifico_5(!sinHorarioEspecifico_5);
        setDiaCerrado_5(false);
        setHorario_9('');
        setHorario_10('');
        setShowPicker_9(false);
        setShowPicker_10(false);
    };
    const handleSinHorarioEspecificoToggle_6 = () => {
        setSinHorarioEspecifico_6(!sinHorarioEspecifico_6);
        setDiaCerrado_6(false);
        setHorario_11('');
        setHorario_12('');
        setShowPicker_11(false);
        setShowPicker_12(false);
    };
    const handleSinHorarioEspecificoToggle_7 = () => {
        setSinHorarioEspecifico_7(!sinHorarioEspecifico_7);
        setDiaCerrado_7(false);
        setHorario_13('');
        setHorario_14('');
        setShowPicker_13(false);
        setShowPicker_14(false);
    };

    return(
        <View style={styles.subcontenedor_formulario_direccion}>
            <Text style={styles.subtitulo_formulario}>Horarios</Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={data_3}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Seleccione el día ' : '...'}
                value={selectedDay}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                setSelectedDay(item.value);
                setIsFocus(false);
                }}>
            </Dropdown>
            <View>
                {selectedDay === '1' && !diaCerrado && !sinHorarioEspecifico && showPicker && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora} 
                    display='spinner'
                    onChange={onChange}/>
                )}
                {selectedDay === '1' && !diaCerrado && !sinHorarioEspecifico &&showPicker && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '1' && !diaCerrado && !sinHorarioEspecifico && !showPicker && (
                    <Pressable onPress={togglePicker}>
                        <Text style={styles.texto}>Hora de apertura</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de apertura"
                        textAlign="center" 
                        value={horario}
                        onChangeText={setHorario}
                        editable={false}
                        onPressIn={togglePicker}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '1' && !diaCerrado && !sinHorarioEspecifico &&showPicker_2 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_2} 
                    display='spinner'
                    onChange={onChange_2}/>
                )}
                {selectedDay === '1' && !diaCerrado && !sinHorarioEspecifico &&showPicker_2 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_2}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_2}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '1' && !diaCerrado && !sinHorarioEspecifico &&!showPicker_2 && (
                    <Pressable onPress={togglePicker_2}>
                        <Text style={styles.texto}>Hora de cerrado</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de cerrado"
                        textAlign="center" 
                        value={horario_2}
                        onChangeText={setHorario_2}
                        editable={false}
                        onPressIn={togglePicker_2}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '1' && (
                    <View style={{flexDirection: 'row', width: '100%', margin: 6}}>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="danger" 
                            size="md"
                            isChecked={diaCerrado} 
                            onChange={handleDíaCerradoToggle}>
                                Día Cerrado
                            </Checkbox>
                        </View>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="purple" 
                            size="md"
                            isChecked={sinHorarioEspecifico} 
                            onChange={handleSinHorarioEspecificoToggle}>
                                Sin Horario Específico
                            </Checkbox>
                        </View>
                    </View>
                )}
                {selectedDay === '2' && !diaCerrado_2 && !sinHorarioEspecifico_2 && showPicker_3 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_3} 
                    display='spinner'
                    onChange={onChange_3}/>
                )}
                {selectedDay === '2' && !diaCerrado_2 && !sinHorarioEspecifico_2 && showPicker_3 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_3}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_3}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '2' && !diaCerrado_2 && !sinHorarioEspecifico_2 && !showPicker_3 && (
                    <Pressable onPress={togglePicker_3}>
                        <Text style={styles.texto}>Hora de apertura</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de apertura"
                        textAlign="center" 
                        value={horario_3}
                        onChangeText={setHorario_3}
                        editable={false}
                        onPressIn={togglePicker_3}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '2' && !diaCerrado_2 && !sinHorarioEspecifico_2 &&showPicker_4 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_4} 
                    display='spinner'
                    onChange={onChange_4}/>
                )}
                {selectedDay === '2' && !diaCerrado_2 && !sinHorarioEspecifico_2 && showPicker_4 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_4}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_4}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '2' && !diaCerrado_2 && !sinHorarioEspecifico_2 &&!showPicker_4 && (
                    <Pressable onPress={togglePicker_4}>
                        <Text style={styles.texto}>Hora de cerrado</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de cerrado"
                        textAlign="center" 
                        value={horario_4}
                        onChangeText={setHorario_4}
                        editable={false}
                        onPressIn={togglePicker_4}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '2' && (
                    <View style={{flexDirection: 'row', width: '100%', margin: 6}}>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="danger" 
                            size="md"
                            isChecked={diaCerrado_2} 
                            onChange={handleDíaCerradoToggle_2}>
                                Día Cerrado
                            </Checkbox>
                        </View>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="purple" 
                            size="md"
                            isChecked={sinHorarioEspecifico_2} 
                            onChange={handleSinHorarioEspecificoToggle_2}>
                                Sin Horario Específico
                            </Checkbox>
                        </View>
                    </View>
                )}
                {selectedDay === '3' && !diaCerrado_3 && !sinHorarioEspecifico_3 && showPicker_5 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_5} 
                    display='spinner'
                    onChange={onChange_5}/>
                )}
                {selectedDay === '3' && !diaCerrado_3 && !sinHorarioEspecifico_3 && showPicker_5 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_5}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_5}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '3' && !diaCerrado_3 && !sinHorarioEspecifico_3 && !showPicker_5 && (
                    <Pressable onPress={togglePicker_5}>
                        <Text style={styles.texto}>Hora de apertura</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de apertura"
                        textAlign="center" 
                        value={horario_5}
                        onChangeText={setHorario_5}
                        editable={false}
                        onPressIn={togglePicker_5}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '3' && !diaCerrado_3 && !sinHorarioEspecifico_3 &&showPicker_6 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_6} 
                    display='spinner'
                    onChange={onChange_6}/>
                )}
                {selectedDay === '3' && !diaCerrado_3 && !sinHorarioEspecifico_3 && showPicker_6 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_6}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_6}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '3' && !diaCerrado_3 && !sinHorarioEspecifico_3 &&!showPicker_6 && (
                    <Pressable onPress={togglePicker_6}>
                        <Text style={styles.texto}>Hora de cerrado</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de cerrado"
                        textAlign="center" 
                        value={horario_6}
                        onChangeText={setHorario_6}
                        editable={false}
                        onPressIn={togglePicker_6}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '3' && (
                    <View style={{flexDirection: 'row', width: '100%', margin: 6}}>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="danger" 
                            size="md"
                            isChecked={diaCerrado_3} 
                            onChange={handleDíaCerradoToggle_3}>
                                Día Cerrado
                            </Checkbox>
                        </View>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="purple" 
                            size="md"
                            isChecked={sinHorarioEspecifico_3} 
                            onChange={handleSinHorarioEspecificoToggle_3}>
                                Sin Horario Específico
                            </Checkbox>
                        </View>
                    </View>
                )}
                {selectedDay === '4' && !diaCerrado_4 && !sinHorarioEspecifico_4 && showPicker_7 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_7} 
                    display='spinner'
                    onChange={onChange_7}/>
                )}
                {selectedDay === '4' && !diaCerrado_4 && !sinHorarioEspecifico_4 && showPicker_7 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_7}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_7}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '4' && !diaCerrado_4 && !sinHorarioEspecifico_4 && !showPicker_7 && (
                    <Pressable onPress={togglePicker_7}>
                        <Text style={styles.texto}>Hora de apertura</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de apertura"
                        textAlign="center" 
                        value={horario_7}
                        onChangeText={setHorario_7}
                        editable={false}
                        onPressIn={togglePicker_7}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '4' && !diaCerrado_4 && !sinHorarioEspecifico_4 && showPicker_8 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_8} 
                    display='spinner'
                    onChange={onChange_8}/>
                )}
                {selectedDay === '4' && !diaCerrado_4 && !sinHorarioEspecifico_4 && showPicker_8 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_8}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_8}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '4' && !diaCerrado_4 && !sinHorarioEspecifico_4 && !showPicker_8 && (
                    <Pressable onPress={togglePicker_8}>
                        <Text style={styles.texto}>Hora de cerrado</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de cerrado"
                        textAlign="center" 
                        value={horario_8}
                        onChangeText={setHorario_8}
                        editable={false}
                        onPressIn={togglePicker_8}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '4' && (
                    <View style={{flexDirection: 'row', width: '100%', margin: 6}}>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="danger" 
                            size="md"
                            isChecked={diaCerrado_4} 
                            onChange={handleDíaCerradoToggle_4}>
                                Día Cerrado
                            </Checkbox>
                        </View>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="purple" 
                            size="md"
                            isChecked={sinHorarioEspecifico_4} 
                            onChange={handleSinHorarioEspecificoToggle_4}>
                                Sin Horario Específico
                            </Checkbox>
                        </View>
                    </View>
                )}
                {selectedDay === '5' && !diaCerrado_5 && !sinHorarioEspecifico_5 && showPicker_9 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_9} 
                    display='spinner'
                    onChange={onChange_9}/>
                )}
                {selectedDay === '5' && !diaCerrado_5 && !sinHorarioEspecifico_5 && showPicker_9 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_9}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_9}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '5' && !diaCerrado_5 && !sinHorarioEspecifico_5 && !showPicker_9 && (
                    <Pressable onPress={togglePicker_9}>
                        <Text style={styles.texto}>Hora de apertura</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de apertura"
                        textAlign="center" 
                        value={horario_9}
                        onChangeText={setHorario_9}
                        editable={false}
                        onPressIn={togglePicker_9}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '5' && !diaCerrado_5 && !sinHorarioEspecifico_5 && showPicker_10 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_10} 
                    display='spinner'
                    onChange={onChange_10}/>
                )}
                {selectedDay === '5' && !diaCerrado_5 && !sinHorarioEspecifico_5 && showPicker_10 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_10}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_10}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '5' && !diaCerrado_5 && !sinHorarioEspecifico_5 && !showPicker_10 && (
                    <Pressable onPress={togglePicker_10}>
                        <Text style={styles.texto}>Hora de cerrado</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de cerrado"
                        textAlign="center" 
                        value={horario_10}
                        onChangeText={setHorario_10}
                        editable={false}
                        onPressIn={togglePicker_10}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '5' && (
                    <View style={{flexDirection: 'row', width: '100%', margin: 6}}>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="danger" 
                            size="md"
                            isChecked={diaCerrado_5} 
                            onChange={handleDíaCerradoToggle_5}>
                                Día Cerrado
                            </Checkbox>
                        </View>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="purple" 
                            size="md"
                            isChecked={sinHorarioEspecifico_5} 
                            onChange={handleSinHorarioEspecificoToggle_5}>
                                Sin Horario Específico
                            </Checkbox>
                        </View>
                    </View>
                )}
                {selectedDay === '6' && !diaCerrado_6 && !sinHorarioEspecifico_6 && showPicker_11 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_11} 
                    display='spinner'
                    onChange={onChange_11}/>
                )}
                {selectedDay === '6' && !diaCerrado_6 && !sinHorarioEspecifico_6 && showPicker_11 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_11}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_11}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '6' && !diaCerrado_6 && !sinHorarioEspecifico_6 && !showPicker_11 && (
                    <Pressable onPress={togglePicker_11}>
                        <Text style={styles.texto}>Hora de apertura</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de apertura"
                        textAlign="center" 
                        value={horario_11}
                        onChangeText={setHorario_11}
                        editable={false}
                        onPressIn={togglePicker_11}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '6' && !diaCerrado_6 && !sinHorarioEspecifico_6 && showPicker_12 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_12} 
                    display='spinner'
                    onChange={onChange_12}/>
                )}
                {selectedDay === '6' && !diaCerrado_6 && !sinHorarioEspecifico_6 && showPicker_12 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_12}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_12}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '6' && !diaCerrado_6 && !sinHorarioEspecifico_6 && !showPicker_12 && (
                    <Pressable onPress={togglePicker_12}>
                        <Text style={styles.texto}>Hora de cerrado</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de cerrado"
                        textAlign="center" 
                        value={horario_12}
                        onChangeText={setHorario_12}
                        editable={false}
                        onPressIn={togglePicker_12}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '6' && (
                    <View style={{flexDirection: 'row', width: '100%', margin: 6}}>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="danger" 
                            size="md"
                            isChecked={diaCerrado_6} 
                            onChange={handleDíaCerradoToggle_6}>
                                Día Cerrado
                            </Checkbox>
                        </View>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="purple" 
                            size="md"
                            isChecked={sinHorarioEspecifico_6} 
                            onChange={handleSinHorarioEspecificoToggle_6}>
                                Sin Horario Específico
                            </Checkbox>
                        </View>
                    </View>
                )}
                {selectedDay === '7' && !diaCerrado_7 && !sinHorarioEspecifico_7 && showPicker_13 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_13} 
                    display='spinner'
                    onChange={onChange_13}/>
                )}
                {selectedDay === '7' && !diaCerrado_7 && !sinHorarioEspecifico_7 && showPicker_13 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_13}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_13}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '7' && !diaCerrado_7 && !sinHorarioEspecifico_7 && !showPicker_13 && (
                    <Pressable onPress={togglePicker_13}>
                        <Text style={styles.texto}>Hora de apertura</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de apertura"
                        textAlign="center" 
                        value={horario_13}
                        onChangeText={setHorario_13}
                        editable={false}
                        onPressIn={togglePicker_13}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '7' && !diaCerrado_7 && !sinHorarioEspecifico_7 &&showPicker_14 && (
                    <DateTimePicker 
                    mode='time' 
                    value={hora_14} 
                    display='spinner'
                    onChange={onChange_14}/>
                )}
                {selectedDay === '7' && !diaCerrado_7 && !sinHorarioEspecifico_7 && showPicker_14 && Platform.OS === 'ios' && (
                    <View style={styles.contenedor_botones_semana}>
                        <TouchableOpacity 
                        style={[ styles.boton_agregar_lista, {flex: 1, backgroundColor: '#E5E5E5',}]}
                        onPress={togglePicker_14}>
                            <Text style={[styles.texto_boton, {color: '#000',}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[{flex: 1, marginHorizontal: 6,}, styles.boton_agregar_lista]}
                        onPress={horaIos_14}>
                            <Text style={styles.texto_boton}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDay === '7' && !diaCerrado_7 && !sinHorarioEspecifico_7 &&!showPicker_14 && (
                    <Pressable onPress={togglePicker_14}>
                        <Text style={styles.texto}>Hora de cerrado</Text>
                        <TextInput 
                        style={[styles.text_input, {color: '#000'}]}
                        placeholder="Hora de cerrado"
                        textAlign="center" 
                        value={horario_14}
                        onChangeText={setHorario_14}
                        editable={false}
                        onPressIn={togglePicker_14}>
                        </TextInput>
                    </Pressable>
                )}
                {selectedDay === '7' && (
                    <View style={{flexDirection: 'row', width: '100%', margin: 6}}>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="danger" 
                            size="md"
                            isChecked={diaCerrado_7} 
                            onChange={handleDíaCerradoToggle_7}>
                                Día Cerrado
                            </Checkbox>
                        </View>
                        <View style={[{flex: 1}, styles.container]}>
                            <Checkbox 
                            colorScheme="purple" 
                            size="md"
                            isChecked={sinHorarioEspecifico_7} 
                            onChange={handleSinHorarioEspecificoToggle_7}>
                                Sin Horario Específico
                            </Checkbox>
                        </View>
                    </View>
                )}
            </View>
        </View>
        
            
    );

}

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        backgroundColor: '#E5E5E5',
        marginBottom: 10,
        width: '100%',
    },
    placeholderStyle: {
        fontSize: 16,
        margin: 6,
    },
    selectedTextStyle: {
        fontSize: 16,
        margin: 6,
    },
    subcontenedor_formulario_direccion: {
        alignItems: 'center', 
        width: '90%',
        borderColor: '#000',
        borderStyle:'solid',
        borderTopWidth: 3,
        borderBottomWidth: 3,
    },
    subtitulo_formulario: {
        fontFamily: 'InriaSans',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    contenedor_botones_semana: {
    flexDirection: 'row',
    width: '90%',
    },
    boton_agregar_lista: {
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1, 
        backgroundColor: '#F43770',
        borderColor: '#F43770',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        height: 50,
        marginTop: 6,
        marginBottom: 10,
    },
    texto_boton: {
        color: '#fff',
        fontFamily: 'InriaSans',
        fontSize: 20,
        marginHorizontal: 5,
    },
    texto: {
        fontFamily: 'InriaSans',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 2,
    },
    text_input: {
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        width: '100%',
        marginBottom: 10,
        height: 50,
        backgroundColor: '#E5E5E5',
        padding: 10,
        fontSize: 16,
    },
});

export default Horarios;