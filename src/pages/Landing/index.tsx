import React from 'react'

import {View, Image, Text} from 'react-native'

import styles from './styles'

import landingImg from '../../assets/images/landing.png'

function Landing(){
    return (
        <View style={styles.container}>
            <Text>ASAS</Text>
            <Image source={landingImg}/>
        </View>
    )
}



export default Landing