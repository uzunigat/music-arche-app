import { View, Text, Image } from 'react-native';
import { styles } from './style';

const Song = ({track}) => {

    return (
        <View style={styles.track}>
            <Image style={styles.trackImage} source={{uri: track.album.images[0].url}}/>
                <View>
                    <Text>{track.name}</Text>
                    <Text>{track.artists[0].name}</Text>
            </View>
        </View>
    )
}

export default Song