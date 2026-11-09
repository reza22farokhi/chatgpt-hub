import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ChatGPT Mastery Hub',
    short_name: 'ChatGPT Hub',
    description: 'مرجع ترفندها و پرامپت‌های حرفه‌ای ChatGPT',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#10b981',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
