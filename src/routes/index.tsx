// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import GalleryCard from '../components/GalleryCard'
import galleryData from '../data/data.json'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col gap-10 m-auto  mx-5">
      {galleryData.map((artwork) => (
        <GalleryCard key={artwork.name} artwork={artwork} />
      ))}
    </div>
  )
}
