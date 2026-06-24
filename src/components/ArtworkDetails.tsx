const ArtworkDetails = ({ artwork }: { artwork: any }) => {
  return (
    <div className="flex flex-col  gap-20 mx-6 mb-17.5">
      <div>
        <div className="">
          <div className="relative">
            <img
              className="static"
              src={artwork.images.hero.small}
              alt={`Art piece of ${artwork.name}`}
            />
            <div className="flex justify-between items-center m-4 gap-4 py-3.5 px-4 absolute top-0 md:bottom-0 lg:bottom-0 md:max-h-10 bg-black">
              <div className="max-w-full">
                <img
                  src="../../assets/shared/icon-view-image.svg"
                  alt="View Image Icon"
                />
              </div>
              <button>
                <p className="text-preset-7 text-white">VIEW IMAGE</p>
              </button>
            </div>
            <div className="absolute  -bottom-16.25 w-[calc(100%-45px)]">
              <div className=" grid gap-2 p-6 bg-white ">
                <h2 className="bg-white text-preset-2">{artwork.name}</h2>
                <p className="text-preset-4 text-grey-400">
                  {artwork.artist.name}
                </p>
              </div>
              <div className="px-4">
                <img className="w-16" src={artwork.artist.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex ">
        <div className="">
          <p className="text-preset-3 text-grey-400">{artwork.description}</p>
          <a href={artwork.source} target="blank">
            <button className="text-preset-5 text-grey-400 pt-16">
              GO TO SOURCE
            </button>
          </a>
        </div>
        <h1 className="text-preset-1 absolute -top-17.5 right-0 -z-10 text-grey-100">
          {artwork.year}
        </h1>
      </div>
    </div>
  )
}

export default ArtworkDetails
