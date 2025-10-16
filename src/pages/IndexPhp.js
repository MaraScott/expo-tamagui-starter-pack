import React from 'react'
import { Platform } from 'react-native'
import { WebView } from 'react-native-webview'

/**
 * Supply your PHP endpoint(s).
 * - DEV: your local PHP built-in server or Docker/nginx (same Wi-Fi as device)
 * - PROD: your real server (e.g., https://vannes.asquiedge.com/index.php)
 *
 * NOTE: Use HTTPS in production. For Android dev over HTTP, see note below.
 */
const DEV_URL = 'http://176.31.162.9:8000/index.php'   // <- change to your LAN IP
const PROD_URL = 'https://vannes.asquiedge.com/index.php'
const USE_DEV = __DEV__ // swap manually if you prefer

const PAGE_URL = PROD_URL

export default function IndexPhp() {
  if (Platform.OS === 'web') {
    // On web, an <iframe> is simplest and reliable for PHP endpoints
    return (
      <iframe
        title="Index PHP"
        src={PAGE_URL}
        style={{ border: 0, width: '100%', height: '100vh' }}
      />
    )
  }

  // iOS/Android: load the remote PHP page
  return (
    <WebView
      source={{ uri: PAGE_URL }}
      originWhitelist={['*']}
      // If your PHP page loads subresources from your domain:
      setSupportMultipleWindows={false}
      allowsInlineMediaPlayback
      javaScriptEnabled
      domStorageEnabled
      // If you need cookies/sessions:
      sharedCookiesEnabled
      // If your PHP needs custom headers or auth:
      // source={{ uri: PAGE_URL, headers: { Authorization: 'Bearer XXX' } }}
      onShouldStartLoadWithRequest={(req) => {
        // Keep everything inside the same WebView
        // Return false to intercept unwanted external navigations if needed
        return true
      }}
    />
  )
}
