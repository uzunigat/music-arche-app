import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    trackContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    track: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        alignItems: 'center',
        paddingLeft: 10,
        backgroundColor: '#777',
        borderRadius: 5
    },
    buttonAdd: {
        textAlign: 'right',
        flex: 1,
        paddingRight: 10
    },
    trackImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10
    }
})

export { styles }
