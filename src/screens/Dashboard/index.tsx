import { Text } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

const Dashboard = () => {
    const token = useAppSelector((state) => state.token)

    return <Text>Welcome</Text>
}

export default Dashboard
