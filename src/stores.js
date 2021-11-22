import { writable } from 'svelte/store'
import { initDefaultTheme } from './utils'

const DEFAULT_VALUE = '{"operationName":null,"variables":{"pokemon":"arceus","reverse":true,"take":1},"query":"fragment data on Pokemon { num species types abilities { first second hidden } baseStats { hp attack defense specialattack specialdefense speed } gender { male female } height weight flavorTexts { game flavor } evYields { hp attack defense specialattack specialdefense speed } isEggObtainable minimumHatchTime maximumHatchTime levellingRate sprite shinySprite backSprite shinyBackSprite smogonTier smogonPage serebiiPage bulbapediaPage }query ($pokemon: PokemonEnum!, $reverse: Boolean!, $take: Int!) { getPokemon( pokemon: $pokemon reverseFlavorTexts: $reverse takeFlavorTexts: $take ) { ...data } } "}'

export const sourceQuery = writable(DEFAULT_VALUE)
export const theme = writable(initDefaultTheme())
