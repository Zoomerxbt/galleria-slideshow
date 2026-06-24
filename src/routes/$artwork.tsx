import { createFileRoute } from '@tanstack/react-router'
import Footer from '#/components/Footer'
import galleryData from '../data/data.json'
import { slugify } from '../helper/utils'
import ArtworkDetails from '#/components/ArtworkDetails'

export const Route = createFileRoute('/$artwork')({
  loader: ({ params }) => {
    const targetSlug = params.artwork

    const artist = galleryData.find((n) => slugify(n.name) === targetSlug)
    if (!artist) {
      throw new Error('Artist not found')
    }

    return artist
  },

  component: ArtPiece,
})

function ArtPiece() {
  const artworkData = Route.useLoaderData()

  return (
    <div className="">
      <ArtworkDetails artwork={artworkData} />
      <Footer artwork={artworkData} />
    </div>
  )
}
