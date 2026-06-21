const Artwork = ({ artwork }: { artwork: any }) => {
  return (
    <div>
      <div>
        <img
          src={artwork.images.hero.large}
          alt={`Art piece of ${artwork.name}`}
        />
        <div className="">
          <img src="../assets" alt="" />
          <p></p>
        </div>
      </div>
      )
    </div>
  )
}

export default Artwork
