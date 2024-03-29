import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    playButton: {
        elevation: 8,
        backgroundColor: '#009688',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 10
    },
    pauseButton: {
        elevation: 8,
        backgroundColor: '#0033CD',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    },
    currentPlaying: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export { styles }
