import Slider from 'react-slick'
import React from 'react'
import { GetStaticProps } from 'next'
import { CardCharacter, characterService } from '@/modules/character'
import { CardLocation, locationService } from '@/modules/locations'
import { CardEpisodes, episodeService } from '@/modules/episodes'
import Link from 'next/link'

type Props = {
  characters: Character[]
  episodes: Episode[]
  locations: Localization[]
}

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

function Home ({ characters, episodes, locations }: Props) {
  return (
    <article className="mt-10 flex flex-col gap-10">
      <h1
        className="
          text-4xl
          font-bold
          text-primary
          first-letter:text-secondary
          dark:first-letter:text-primary
          dark:text-lighten
        "
      >
        Rick & Morty Show!
      </h1>
      <section className="my-10">
        <Slider {...settings} className="py-3">
          {characters?.map((character) => (
            <CardCharacter key={character.id} {...character} />
          ))}
        </Slider>
        <Link
          className="hover:tracking-wide transition-all h-full text-2xl flex items-center justify-center w-full"
          href="/characters/list"
        >
          Mais personagens
        </Link>
      </section>
      <section className="my-10">
        <Slider {...settings} className="py-3">
          {locations?.map((location) => (
            <CardLocation key={location.id} {...location} />
          ))}
        </Slider>
        <Link
          className="hover:tracking-wide transition-all h-full text-2xl flex items-center justify-center w-full"
          href="/locations/list"
        >
          Mais Localizações
        </Link>
      </section>
      <section className="my-10">
        <Slider {...settings} className="py-3">
          {episodes?.map((episode) => (
            <CardEpisodes key={episode.id} {...episode} />
          ))}
        </Slider>
        <Link
          className="hover:tracking-wide transition-all h-full text-2xl flex items-center justify-center w-full"
          href="/episodes/list"
        >
          Mais Episódios
        </Link>
      </section>
    </article>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const dataCharacters = await characterService.getAll({})
  const dataLocations = await locationService.getAll({})
  const dataEpisodes = await episodeService.getAll({})

  return {
    props: {
      characters: dataCharacters.results,
      episodes: dataEpisodes.results,
      locations: dataLocations.results
    }
  }
}

export default Home
