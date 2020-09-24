import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 8
    },
}))`
    background-color: #14171A;
`;

export const Fleet = styled.TouchableOpacity`
    width: 90px;
    align-items: center;
`;

export const Icon = styled.Image`
    border:4px solid  ${({ isNew }) => !isNew ? '#FFF':'#1DA1F2'};
    border-radius: 32px;
    height: 64px;
    width: 64px;
`;

export const Label = styled.Text`
    color: #FFFFFF;
    margin-top: 2px;
    font-size: 12px;
    text-align: center;
`;
