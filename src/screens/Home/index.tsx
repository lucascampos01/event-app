import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';

import {styles} from './styles';

import {Participant} from '../../components/Participant';

export function Home(){

    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantRemove(name: string){
        Alert.alert('Remover participante', `Deseja remover o participante ${name}?`, [
            {
                text:'Cancelar',
                style: 'cancel'
               },
            {
                text: 'Confirmar',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant != name))
            
            }
        ]);

    }

    function handleParticipantAdd(){
        if(participants.includes(participantName)){
            return Alert.alert('Participante existe', `${name} já está cadastrado na lista de participantes deste evento.`);
        }
        if(participantName === ''){
           return Alert.alert('Erro ao adicionar participante', 'Por favor, digite um nome válido e tente novamente.');
        }

        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');

    }

    return(
    <View style={styles.container}>
            <TextInput style={styles.inputEventName}
            placeholder='Nome do Evento'
            placeholderTextColor = '#fff'
            />
            
            
            <TextInput style={styles.inputEventDate}
            placeholder = 'Informe a data e o horário do evento'
            placeholderTextColor = '#d9d9d9'
            />
         

            <View style={styles.form}>
                <TextInput style={styles.inputParticipant}
                    placeholder = 'Digite o nome do participante'
                    placeholderTextColor = '#d9d9d9'
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity  style={styles.btnAddParticipant} onPress={handleParticipantAdd}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data = {participants}
                keyExtractor = {item => item}
                renderItem = {({item}) =>(
                    <Participant
                    key={item}
                    name={item}
                    onRemove = {() => handleParticipantRemove(item)} />
                )}
                ListEmptyComponent = {() => (
                    <Text style={styles.listEmptyText}>
                        Nenhum participante foi adicionado para este evento ainda.
                    </Text>
                ) }
            />
            
    </View>
)}