import Image from 'next/image'
import React from 'react'

const ShowImage = (character: Character) => {
  return (
    <section className="ml-4 group/character-image">
      <Image
        loading='lazy'
        className="w-60 mt-4 rounded-xl group-hover/character-image:scale-110 transition-all"
        src={character.image}
        alt={character.name}
        width={100}
        height={100}
      />
    </section>
  )
}

export default ShowImage
