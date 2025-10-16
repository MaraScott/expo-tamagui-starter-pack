// App.js
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TamaguiProvider, Theme } from 'tamagui'
import { config } from '@app/tamagui.config'
import HomeScreen from '@pages/HomeScreen'

export default function App() {
  const [isDark, setIsDark] = React.useState(true)

  return (
    <TamaguiProvider config={config}>
      <Theme name={isDark ? 'dark' : 'light'}>
        <HomeScreen isDark={isDark} setIsDark={setIsDark} />
        <StatusBar style={isDark ? 'light' : 'dark'} />
      </Theme>
    </TamaguiProvider>
  )
}
