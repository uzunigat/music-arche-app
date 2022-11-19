import { View } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../../store/hooks'
import { Card, Title, Paragraph } from 'react-native-paper';


export default function GuestHost() {
    const user = useAppSelector((state) => state.user)

  return (
    <View>
        <Card>
            <Card.Content style={{alignItems: "center"}}>
            <Title>Host Name</Title>
            <Paragraph>{user.displayName}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: user.imagesUrl }} resizeMode={`contain`} />
        </Card>
    </View>
  )
}