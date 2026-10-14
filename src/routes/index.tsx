import { createFileRoute } from '@tanstack/react-router'
// import GalleryCard from '../components/GalleryCard'
// import galleryData from '../data/data.json'
import MasonaryConatiner from '../components/HomePageContainer'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return <MasonaryConatiner />
}
