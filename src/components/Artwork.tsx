const Artwork = ({ artwork }: { artwork: any }) => {
  return (
    <div className="relative">
      <img
        src={artwork.images.hero.large}
        alt={`Art piece of ${artwork.name}`}
      />
      <div className="flex justify-between items-center  gap-4 py-3.5 px-4  absolute top-0 bg-black">
        <div className="max-w-full">
          <img
            src="../../assets/shared/icon-view-image.svg"
            alt="View Image Icon"
          />
        </div>
        <p className="text-preset-7 text-white">VIEW IMAGE</p>
      </div>
    </div>
  )
}

export default Artwork
