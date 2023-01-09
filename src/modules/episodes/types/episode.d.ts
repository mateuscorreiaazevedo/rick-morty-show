type Episode = {
  id?: number
  name?: string
  air_date?: string
  episode?: string
  characters?: string[]
  url?: string
  created?: string
}

type Episodes = {
  results: Episode[]
  info: Info
}
