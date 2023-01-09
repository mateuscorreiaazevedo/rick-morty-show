import React from 'react'

const Content = (character: Character) => {
  return (
    <section className="flex gap-3 flex-col text-lg w-full">
      <span className="dark:hover:text-primary hover:text-secondary transition-all">
        <strong className="mr-1 first-letter:text-primary dark:first-letter:text-secondary">Gênero:</strong>
        {character.gender}
      </span>
      <span className="dark:hover:text-primary hover:text-secondary transition-all">
        <strong className="mr-1 first-letter:text-primary dark:first-letter:text-secondary">Status:</strong>
        {character.status}
      </span>
      <span className="dark:hover:text-primary hover:text-secondary transition-all">
        <strong className="mr-1 first-letter:text-primary dark:first-letter:text-secondary">Espécie:</strong>
        {character.species}
      </span>
      <span className="dark:hover:text-primary hover:text-secondary transition-all">
        <strong className="mr-1 first-letter:text-primary dark:first-letter:text-secondary">Origem:</strong>
        {character.origin.name}
      </span>
      <span className="dark:hover:text-primary hover:text-secondary transition-all">
        <strong className="mr-1 first-letter:text-primary dark:first-letter:text-secondary">Localização Atual:</strong>
        {character.location.name}
      </span>
      {character.type && (
        <span className="dark:hover:text-primary hover:text-secondary transition-all">
          <strong className="mr-1 first-letter:text-primary dark:first-letter:text-secondary">Tipo:</strong>
          {character.type}
        </span>
      )}
    </section>
  )
}

export default Content
