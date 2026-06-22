import { Link } from '@tanstack/react-router'

const GalleryCard = ({ artwork }: { artwork: any }) => {
  return (
    <div className="relative break-inside-avoid ">
      <Link
        to={`/$artwork`}
        params={{ artwork: artwork.name.toLowerCase().replace(/\s+/g, '-') }}
      >
        <img
          className="w-full"
          src={artwork.images.gallery}
          alt={`Image of ${artwork.name}`}
        />
        <div className="flex flex-col gap-4  w-full absolute bottom-0 p-8 bg-card-gradient ">
          <h2 className="text-preset-2 text-white">{artwork.name}</h2>
          <p className="text-preset-5 text-white opacity-[0.7528]">
            {artwork.artist.name}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default GalleryCard
