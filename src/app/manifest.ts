import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Oliver Nederal',
    short_name: 'Oliver Nederal',
    description: 'I am a high school student with interests in computer vision, graph traversal algorithms, and full-stack development. Read more about me and see some of my projects on this website',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}