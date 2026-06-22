import { createFileRoute } from '@tanstack/react-router'
// import Artwork from '#/components/Artwork'
import Footer from '#/components/Footer'
import galleryData from '../data/data.json'

export const Route = createFileRoute('/$artwork')({
  loader: ({ params }) => {
    const artist = galleryData.find((n) => n.name === params.artwork)
    if (!artist) {
      throw new Error('Artist not found')
    }
    return artist
  },

  component: ArtPiece,
})

function ArtPiece() {
  return (
    <div className="">
      <Footer />
    </div>
  )
}
