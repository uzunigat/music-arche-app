import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import { styles } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '../../../store/hooks';
import AddSong from '../../../components/AddSong/index';


export default function GuestSearch() {

    const token = useAppSelector((state) => state.token)

    const [searchQuery, setSearchQuery] = useState('');
    const [tracks, setTracks] = useState([])

    const addSong = async (trackId: string) => {
        console.log('Adding song', trackId)
    }

    const onChangeSearch = query => { 
        setTracks([])
        setSearchQuery(query)
    }

    const searchTracks = async () => {
        const response = await fetch(`http://localhost:3000/api/v1/search/${searchQuery}/${token.id}`, {
            method: 'GET',
        })

        const data = await response.json() as any
        console.log(data[0].album.images[0].url)
        setTracks(data)
    }
    return (
        <ScrollView>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    onEndEditing={searchTracks}
                    value={searchQuery}
                />

                {
                tracks.map((track) => {
                        return (
                        <View key={track.id} style={styles.trackContainer}>
                            <AddSong track={track} addSong={addSong}/>
                        </View>)
                    })
                }
        </ScrollView>
    )
}