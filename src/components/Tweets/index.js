import React from 'react';

import { Text } from 'react-native';

import { MaterialIcons, EvilIcons } from '@expo/vector-icons';

import { 
    Container, 
    Tweet, 
    Avatar, 
    TweetHeader,
    User, 
    Name, 
    Area,
    IconArea,
    TweetBody,
    TweetBodyText,
    TweetButtonArea,
    TweetButtonContainer,
} from './styles';

import avatar from '../../assets/img/avatar.png';

const tweets = [
    {
        key: 1,
        name: 'Candin',
        user: '@_Candin',
        avatar: avatar,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim tempor rutrum. Integer non turpis dui. Sed nec quam sed lectus imperdiet condimentum a a quam'
    }
];

export default function Tweets() {
    return(
        <Container>
            {tweets.map((tweet) => (
            <Tweet key={tweet.key}>
            <TweetHeader>
                <Avatar source={tweet.avatar} />
                <Area>
                    <Name>{tweet.name} <User>{tweet.user}</User></Name>
                   
                </Area>
                <IconArea>
                    <MaterialIcons name="keyboard-arrow-down" size={26} color="#FFF" />
                </IconArea>
            </TweetHeader>

            <TweetBody>
                <TweetBodyText>
                        {tweet.body}
                </TweetBodyText>
            </TweetBody>
            <TweetButtonContainer>
            <TweetButtonArea>
                <EvilIcons name="comment" size={24} color="#FFF" />
                <EvilIcons name="retweet" size={24} color="#FFF" />
                <EvilIcons name="heart" size={24} color="#FFF" />
                <EvilIcons name="share-google" size={24} color="#FFF" />
            </TweetButtonArea>
            </TweetButtonContainer>
        </Tweet>
            ))}
        </Container>
    )
}