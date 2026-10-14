const InfoContainer = ({ artwork }: { artwork: any }) => {
  return (
    <div className="relative sm:w-[70%]">
      <div>
        <img
          src={artwork.images.hero.large}
          alt={`Art piece of ${artwork.name}`}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="absolute top-0 flex gap-5 bg-black items-center m-4 py-3.5 px-4 sm:bottom-0 sm:top-auto">
        <div>
          <img
            src="../../assets/shared/icon-view-image.svg"
            alt="View Image Icon"
          />
        </div>
        <button>
          <p className="text-preset-7 text-white">VIEW IMAGE</p>
        </button>
      </div>
    </div>
  )
}

export default InfoContainer
