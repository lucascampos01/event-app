import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#c3c3c3',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10
    },
    
    nameParticipant: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        marginLeft: 16,
        marginRight: 16
    },

    btnRemoveParticipant: {
        height: 58,
        width: 58,
        backgroundColor: "#CD0C36",
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});