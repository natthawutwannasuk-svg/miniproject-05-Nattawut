import { Text } from '../../components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import { useClientOnlyValue } from '../../components/useClientOnlyValue';
import { useColorScheme } from '../../components/useColorScheme';
import Colors from '../../constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}>
     <Tabs.Screen
  name="index"
  options={{
    title: 'Facebook', 
    headerTitleAlign: 'left',
    headerTitleStyle: {
      color: '#0866FF', 
      fontWeight: 'bold',
      fontSize: 24,
    },
    tabBarLabel: 'Feed',
    tabBarIcon: ({color}) => <FontAwesome
    name='home' size={28} color={color} />,
  headerRight: () => (
  <Pressable 
    onPress={() => alert('ออกจากระบบ')} 
    style={({ pressed }) => ({
      opacity: pressed ? 0.5 : 1,
      marginRight: 15,
      alignItems: 'center', 
    })}
  >
    <FontAwesome name="sign-out" size={20} color="#ff4d4d" /> 
    <Text style={{ fontSize: 10, color: '#ff4d4d', fontWeight: 'bold' }}>Logout</Text>
  </Pressable>
),
  }}
/>
      <Tabs.Screen
   name="two"
  options={{
    title: 'Facebook', 
    headerTitleAlign: 'left',
    headerTitleStyle: {
      color: '#0866FF', 
      fontWeight: 'bold',
      fontSize: 24,
    },
    tabBarLabel: 'Profile',
    tabBarIcon: ({color}) => <FontAwesome
    name='user' size={28} color={color} />,
  headerRight: () => (
  <Pressable 
    onPress={() => alert('ออกจากระบบ')} 
    style={({ pressed }) => ({
      opacity: pressed ? 0.5 : 1,
      marginRight: 15,
      alignItems: 'center', 
    })}
  >
    <FontAwesome name="sign-out" size={20} color="#ff4d4d" /> 
    <Text style={{ fontSize: 10, color: '#ff4d4d', fontWeight: 'bold' }}>Logout</Text>
  </Pressable>
),
  }}
      />
    </Tabs>
  );
}
