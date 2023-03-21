import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './style';

const AddSong = ({track, addSong}) => {

    return (
        <View style={styles.track}>
            <Image style={styles.trackImage} source={{uri: track.album.images[0].url}}/>
                <View>
                    <Text>{track.name}</Text>
                    <Text>{track.artists[0].name}</Text>
            </View>
            <Ionicons style={styles.buttonAdd} onPress={() => addSong(track.id)} name={'add'} size={20} color={'green'} /> 
        </View>
    )
}

export default AddSong