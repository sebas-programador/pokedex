import axiosInstance from '@/plugins/axios'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', () => {
  async function getPokemon() {
    const response = await axiosInstance.get('pokemon')
    return response
  }

  return {
    getPokemon,
  }
})
