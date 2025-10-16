// src/pages/HomeScreen.jsx
import React from 'react'
import AppShell from '../Organisms/AppShell'
import HomeTemplate from '../Templates/HomeTemplate'

export default function HomeScreen({ isDark, setIsDark }) {
  return (
    <AppShell isDark={isDark} setIsDark={setIsDark}>
      <HomeTemplate />
    </AppShell>
  )
}
