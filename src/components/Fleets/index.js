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
        label: '@_candin',
        isNew: false
    },
    {
        key: 2,
        img: img2,
        label: '@_victin',
        isNew: true
    },
    {
        key: 3,
        img: img3,
        label: '@_souza',
        isNew: true
    },
    {
        key: 4,
        img: img4,
        label: '@carlos',
        isNew: true
    },
    {
        key: 5,
        img: img5,
        label: '@gerson',
        isNew: true
    },
    {
        key: 6,
        img: img6,
        label: '@fernanda',
        isNew: true
    },
    {
        key: 7,
        img: img7,
        label: '@zeze',
        isNew: true
    },
];


export default function Fleets() {
    return(
        <Container>
            {items.map((item) => (
                <Fleet key={item.key} >
                    <Icon source={item.img} isNew={item.isNew}/>
                    <Label>{item.label}</Label>
                </Fleet>
            ))}
        </Container>
    );
}