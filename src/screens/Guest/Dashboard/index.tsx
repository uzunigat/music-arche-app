import { ScrollView, Text, View } from 'react-native'
import { useAppSelector } from '../../../store/hooks'
import { styles } from './style'
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';


const GuestDashboard = ({navigation}) => {

    const token = useAppSelector((state) => state.token)

    const [searchQuery, setSearchQuery] = useState('');
    const [tracks, setTracks] = useState([])

    const onChangeSearch = query => { 
        setTracks([])
        setSearchQuery(query)
    }

    useEffect(() => {
        tracks.forEach((track) => {
            console.log(track.name)
        })
    }, [tracks])

    const searchTracks = async () => {
        const response = await fetch(`http://localhost:3000/api/v1/search/${searchQuery}/${token.id}`, {
            method: 'GET',
        })

        const data = await response.json() as any
        setTracks(data)
    }

    const play = async () => {
        await fetch(`http://localhost:3000/api/v1/player/${token.id}/play/`, {
            method: 'PUT',
        })
    }

    const pause = async () => {
        await fetch(`http://localhost:3000/api/v1/player/${token.id}/pause`, {
            method: 'PUT',
        })
    }

    return <ScrollView>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                onEndEditing={searchTracks}
                value={searchQuery}
            />
            {
            tracks.map((track) => {
                return (
                <View style={styles.trackContainer}>
                    <View style={styles.track}>
                        <Text>{track.name}</Text>
                        <Ionicons style={styles.buttonAdd} onPress={() => {console.log('Added')}} name={'add'} size={20} color={'green'} />  
                    </View>
                </View>)
            })
        }
            <Ionicons onPress={play} name={'play'} size={20} color={'green'} />  
            <Ionicons onPress={pause} name={'pause'} size={20} color={'red'} />  

        </ScrollView>
}

export default GuestDashboard