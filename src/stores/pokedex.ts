import { defineStore } from 'pinia'
import { ref } from 'vue'

// import type { IPokemon } from '@/interfaces/pokemon'
import axiosInstance from '@/plugins/axios'

export const usePokedexStore = defineStore('pokedex', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pokemonList = ref<any>([])
  async function getPokemon() {
    const limit = 20
    const offset = 20
    const response = await axiosInstance.get(`pokemon?limit=${limit}&offset=${offset}`)

    if (response.status !== 200) {
      // pokemonList.value = []
      return false
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const promise = response.data.results.map(async (pokemon: any) => {
      const response = await getPokemonDetail(pokemon.url)
      if (response) return response
    })

    pokemonList.value = await Promise.all(promise)

    return true
  }

  async function getPokemonDetail(pokemon: string) {
    const response = await axiosInstance(pokemon)

    if (response.status !== 200) {
      return false
    }

    return response.data
  }

  return {
    pokemonList,
    getPokemon,
  }
})
