import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import camelcaseKeys from 'camelcase-keys';

interface ExternalUrls {
  spotify: string
}

interface Followers {
  href: any
  total: number
}

interface CImage {
  height: any
  url: string
  width: any
}

interface UserProfile {
  displayName: string
  externalUrls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: Array<CImage>
  type: string
  uri: string
}


const Dashboard = ({ route, navigation }) => {

    return (
      <Text>Welcome</Text>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
  });

export default Dashboard