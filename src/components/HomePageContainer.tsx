import GalleryCard from './GalleryCard'
import galleryData from '../data/data.json'

const MasonaryConatiner = () => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-4 px-4 sm:px-8">
      {galleryData.map((artwork) => (
        <GalleryCard key={artwork.name} artwork={artwork} />
      ))}
    </div>
  )
}

export default MasonaryConatiner
