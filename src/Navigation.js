import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import NotificationScreen from './screens/Notifications';
import MessageScreen from './screens/Messages';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: Octicons,
        name: 'home',
    },
    Search: {
        lib: AntDesign,
        name: 'search1',
    },
    Notifications: {
        lib: Feather,
        name: 'bell',
    },
    Messages: {
        lib: MaterialCommunityIcons,
        name: 'email-outline',
    },
};

export default function Navigation() {

    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, size, focused }) => {
                const { lib: Icon, name} = icons[route.name];
                return <Icon name={name} size={26} color={color} />
            },
            showLabel: false
        })}

        tabBarOptions={{
            style: {
                backgroundColor : '#14171A',
                borderTopColor: 'rgba(255,255,255,0.2)',
            },
            showLabel: false,
            activeTintColor: '#1DA1F2',
            inactiveTintColor: '#92929C'
        }}
        
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen}   />
            <Tab.Screen name="Notifications" component={NotificationScreen} />
            <Tab.Screen name="Messages" component={MessageScreen} />
        </Tab.Navigator>
    );
}