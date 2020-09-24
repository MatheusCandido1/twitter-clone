import React from 'react';
import { Text } from 'react-native';

import { Container, ContainerFleets } from './styles';

import Fleets from '../../components/Fleets';

export default function Home() {
    return(
        <Container>
            <ContainerFleets>
                <Fleets />
            </ContainerFleets>
        </Container>
    );
}