import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`; 

export const Tweet = styled.View`
    height: auto;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: #393939
`; 


export const TweetHeader = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`; 

export const IconArea = styled.View`
    flex-direction: row;
    margin-top: -40px;
`; 

export const Area = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: -40px;
`

export const Name = styled.Text`
    color: #FFF;
    font-size: 16px;
    margin-left: -145px;
`; 

export const User = styled.Text`
    color: #FFF;
    font-size: 16px;
    margin-left: 5px;
    font-weight: bold;
`; 

export const Avatar = styled.Image`
    border-radius: 32px;
    height: 64px;
    width: 64px;
    margin-top: 10px;
    margin-left: 10px;
`


export const TweetBody = styled.View`
    margin-top: -40px;
    margin-left: 85px;
`; 


export const TweetBodyText = styled.Text`
    font-size: 14px;
    color: #FFF;
`; 

export const TweetButtonContainer = styled.View`  
    margin-left: 70px;
`

export const TweetButtonArea = styled.View`
    margin-top: 10px;
    height: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`; 



