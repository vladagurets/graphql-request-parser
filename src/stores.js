import { writable } from 'svelte/store'
import { initDefaultTheme } from './utils'

const DEFAULT_VALUE = '{"operationName":null,"variables":{"pokemon":"arceus","reverse":true,"take":1},"query":"fragment data on Pokemon {\n  num\n  species\n  types\n  abilities {\n    first\n    second\n    hidden\n  }\n  baseStats {\n    hp\n    attack\n    defense\n    specialattack\n    specialdefense\n    speed\n  }\n  gender {\n    male\n    female\n  }\n  height\n  weight\n  flavorTexts {\n    game\n    flavor\n  }\n  evYields {\n    hp\n    attack\n    defense\n    specialattack\n    specialdefense\n    speed\n  }\n  isEggObtainable\n  minimumHatchTime\n  maximumHatchTime\n  levellingRate\n  sprite\n  shinySprite\n  backSprite\n  shinyBackSprite\n  smogonTier\n  smogonPage\n  serebiiPage\n  bulbapediaPage\n}\n\nquery ($pokemon: PokemonEnum!, $reverse: Boolean!, $take: Int!) {\n  getPokemon(\n    pokemon: $pokemon\n    reverseFlavorTexts: $reverse\n    takeFlavorTexts: $take\n  ) {\n    ...data\n  }\n}\n"}'

export const sourceQuery = writable(DEFAULT_VALUE)
export const theme = writable(initDefaultTheme())
