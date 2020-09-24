import React from 'react';
import { Container, Fleet, Icon, Label } from './styles';

import img1 from '../../assets/img/avatar.png';
import img2 from '../../assets/img/avatar.png';
import img3 from '../../assets/img/avatar.png';
import img4 from '../../assets/img/avatar.png';
import img5 from '../../assets/img/avatar.png';
import img6 from '../../assets/img/avatar.png';
import img7 from '../../assets/img/avatar.png';

const items = [
    {
        key: 1,
        img: img1,
        label: '@_candin'
    },
    {
        key: 2,
        img: img2,
        label: '@_victin'
    },
    {
        key: 3,
        img: img3,
        label: '@_souza'
    },
    {
        key: 4,
        img: img4,
        label: '@carlos'
    },
    {
        key: 5,
        img: img5,
        label: '@gerson'
    },
    {
        key: 6,
        img: img6,
        label: '@fernanda'
    },
    {
        key: 7,
        img: img7,
        label: '@zeze'
    },
];


export default function Fleets() {
    return(
        <Container>
            {items.map((item) => (
                <Fleet key={item.key}>
                    <Icon source={item.img} />
                    <Label>{item.label}</Label>
                </Fleet>
            ))}
        </Container>
    );
}