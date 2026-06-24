import previousIcon from '../../assets/shared/icon-back-button.svg'
import nextIcon from '../../assets/shared/icon-next-button.svg'

const Footer = ({ artwork }: { artwork: any }) => {
  return (
    <div className="flex justify-between items-center pt-6">
      <div>
        <h3 className="text-preset-3  ">{artwork.name}</h3>
        <p className="text-preset-5 ">{artwork.artist.name}</p>
      </div>
      <div className="flex justify-between gap-10">
        <button>
          <img src={previousIcon} alt="Previous icon" />
        </button>
        <button>
          <img src={nextIcon} alt="Next icon" />
        </button>
      </div>
    </div>
  )
}

export default Footer
