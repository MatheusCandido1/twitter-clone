import React from 'react';

import { Container } from './styles';

import { FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <Container>
            <FontAwesome name="bars" size={26} color="#1DA1F2"/>
            <AntDesign name="twitter" size={26} color="#1DA1F2"/>
            <MaterialCommunityIcons name="star-four-points-outline" size={26} color="#1DA1F2"/>
        </Container>
    )
}