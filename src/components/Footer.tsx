import { Link, useNavigate } from '@tanstack/react-router'
import galleryData from '../data/data.json'
import { slugify } from '../helper/utils'
import previousIcon from '../../assets/shared/icon-back-button.svg'
import nextIcon from '../../assets/shared/icon-next-button.svg'

const Footer = ({ artwork }: { artwork: any }) => {
  const navigate = useNavigate()

  const currentIndex = galleryData.findIndex(
    (item) => item.name === artwork.name,
  )

  const prevArtwork = galleryData[currentIndex - 1]
  const nextArtwork = galleryData[currentIndex + 1]

  // Calculate percentage completion (1-based index)
  const progressPercentage = ((currentIndex + 1) / galleryData.length) * 100

  const handlePrev = () => {
    if (prevArtwork) {
      navigate({
        to: '/$artwork',
        params: { artwork: slugify(prevArtwork.name) },
      })
    }
  }

  const handleNext = () => {
    if (nextArtwork) {
      navigate({
        to: '/$artwork',
        params: { artwork: slugify(nextArtwork.name) },
      })
    }
  }

  return (
    <footer className="w-full mt-10">
      <div className="w-full bg-[#E5E5E5] h-px">
        <div
          className="bg-black h-px transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="flex justify-between items-center p-4">
        <div>
          <h3 className="text-preset-3">{artwork.name}</h3>
          <p className="text-preset-5">{artwork.artist.name}</p>
        </div>
        <div className="flex justify-between gap-6">
          <button onClick={handlePrev} disabled={!prevArtwork}>
            <img src={previousIcon} alt="Previous icon" />
          </button>
          <button onClick={handleNext} disabled={!nextArtwork}>
            <img src={nextIcon} alt="Next icon" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
