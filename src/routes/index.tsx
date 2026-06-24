import { createFileRoute } from '@tanstack/react-router'
import GalleryCard from '../components/GalleryCard'
import galleryData from '../data/data.json'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="masonary max-w-7xl mx-auto px-5">
      {galleryData.map((artwork) => (
        <GalleryCard key={artwork.name} artwork={artwork} />
      ))}
    </div>
  )
}
