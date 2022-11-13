import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { User } from '../../models'
import { setUser } from '../../store'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

const Dashboard = () => {
    const token = useAppSelector((state) => state.token)
    const user = useAppSelector((state) => state.user)
    const dispatcher = useAppDispatch()

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3000/api/v1/user/${token.id}`)
            const userResponse = (await response.json()).data

            dispatcher(setUser(userResponse))
        })()
    },[])

    return <Text>Welcome {user.displayName}</Text>
}

export default Dashboard
