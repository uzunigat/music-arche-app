import { useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { setUser } from '../../../store'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { styles } from './style'

const HostDashboard = () => {
    const token = useAppSelector((state) => state.token)
    const user = useAppSelector((state) => state.user)
    const dispatcher = useAppDispatch()

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3000/api/v1/user/${token.id}`)
            const userResponse = (await response.json()).data

            dispatcher(setUser(userResponse))
            console.log(userResponse.tokenId)
        })()
    },[])

    return <View style={styles.container}>
            <Text>Welcome {user.displayName}</Text>
            <Image style={{width: '30%', height: '20%'}} source={{uri: user.imagesUrl}}></Image>
        </View>
}

export default HostDashboard
