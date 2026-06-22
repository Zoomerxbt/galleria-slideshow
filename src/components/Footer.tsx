import previousIcon from '../../assets/shared/icon-back-button.svg'
import nextIcon from '../../assets/shared/icon-next-button.svg'

const Footer = () => {
  return (
    <div className="flex justify-between">
      <h3></h3>
      <p></p>
      <div className="">
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
