import { Link } from '@tanstack/react-router'
import { slugify } from '../helper/utils'

const GalleryCard = ({ artwork }: { artwork: any }) => {
  return (
    <div className="mb-4 break-inside-avoid">
      <div className="relative">
        <Link to="/$artwork" params={{ artwork: slugify(artwork.name) }}>
          <img
            className="w-full"
            src={artwork.images.gallery}
            alt={`Image of ${artwork.name}`}
          />
          <div className="flex flex-col gap-4 w-full absolute bottom-0 p-8 bg-card-gradient">
            <h2 className="text-preset-2 text-white">{artwork.name}</h2>
            <p className="text-preset-5 text-white opacity-[0.7528]">
              {artwork.artist?.name}
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default GalleryCard
