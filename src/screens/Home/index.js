import React from 'react';
import { Text } from 'react-native';

import { Container, ContainerFleets, ContainerTweets } from './styles';

import Fleets from '../../components/Fleets';
import Tweets from '../../components/Tweets';

export default function Home() {
    return(
        <Container>
            <ContainerFleets>
                <Fleets />
            </ContainerFleets>
            <ContainerTweets>
                <Tweets />
            </ContainerTweets>
        </Container>
    );
}