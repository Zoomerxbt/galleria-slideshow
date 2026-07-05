const ArtworkDetails = ({ artwork }: { artwork: any }) => {
  return (
    <div>
      <div className="flex flex-col gap-12.25 mx-6 sm:mx-10 sm:gap-34.5 md:justify-between md:flex-row md:gap-9">
        <div className="relative sm:w-full">
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

          <div className="w-[calc(100%-45px)] -mt-16 relative z-10 sm:absolute sm:top-0 sm:right-0 sm:w-[50%]  sm:mt-0 md:flex md:flex-col md:justify-between md:h-full ">
            <div className="flex flex-col gap-2 p-6 bg-white sm:pl-16.25  sm:pb-16.25  sm:pt-0 sm:pr-0 md:pl-16 md:pb-16 ">
              <h2 className="text-preset-2 sm:text-[56px] ">{artwork.name}</h2>
              <p className="text-preset-4 text-grey-400">
                {artwork.artist.name}
              </p>
            </div>

            <div className="px-4 sm:flex sm:justify-end sm:px-14.25 ">
              <img className="w-16 sm:w-32" src={artwork.artist.image} alt="" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col gap-16 sm:px-39 sm:gap-10 md:pt-27.5 md:pr-31.5 md:pb-0 md:pl-0 md:gap-27 md:max-w-199 md:h-full md:justify-between ">
            <p className="text-preset-3 text-grey-400 sm:text-[14px] sm:base-[200%]  ">
              {artwork.description}
            </p>
            <a href={artwork.source} target="_blank" rel="noreferrer">
              <button className="text-preset-5 text-grey-400">
                GO TO SOURCE
              </button>
            </a>
          </div>
          <h1 className="text-preset-1 text-grey-100 absolute -top-16.25 right-0 -z-10 sm:left-0 sm:top-[-50%] md:top-0 ">
            {artwork.year}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ArtworkDetails
