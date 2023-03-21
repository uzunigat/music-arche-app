import { ScrollView, Text, View } from 'react-native'
import { useAppSelector } from '../../../store/hooks'
import { useState, useEffect } from 'react';
import Song from '../../../components/Song/index';
import useSWR from 'swr';


const GuestDashboard = ({}) => {

    const token = useAppSelector((state) => state.token)
    const [queue, setQueue] = useState({} as any)

    const getData = async () => {
        const response = await fetch(`http://localhost:3000/api/v1/player/${token.id}/queue`)
        const data = await response.json()

        setQueue({
            currentlyPlaying: data.currently_playing,
            queue: data.queue
        })

        return data
    }

    const {error} = useSWR(`http://localhost:3000/api/v1/player/${token.id}/queue`, getData, {refreshInterval: 500}) 


    return <ScrollView>
            {
                queue.currentlyPlaying ? 
                            <Song track={queue.currentlyPlaying}/>
                    : 
                    <Text>Nothing is playing</Text>
            }
        </ScrollView>
}

export default GuestDashboard