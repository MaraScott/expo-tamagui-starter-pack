// src/pages/HomeScreen.jsx
import React from 'react'
import AppShell from '@organisms/AppShell'
import HomeTemplate from '@templates/HomeTemplate'

export default function HomeScreen({ isDark, setIsDark }) {
  return (
    <AppShell isDark={isDark} setIsDark={setIsDark}>
      <HomeTemplate />
    </AppShell>
  )
}
