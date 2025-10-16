// App.js
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TamaguiProvider, Theme } from 'tamagui'
import { config } from '@app/tamagui.config'
import HomeScreen from '@pages/HomeScreen'
import IndexPhp from '@pages/IndexPhp'
import VannesIndex from '@pages/VannesIndex'

export default function App() {
  const [isDark, setIsDark] = React.useState(true)

  return (
    <TamaguiProvider config={config}>
      <Theme name={isDark ? 'dark' : 'light'}>
        <VannesIndex />
      </Theme>
    </TamaguiProvider>
  )
}
