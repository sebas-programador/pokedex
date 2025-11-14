<script setup lang="ts">
import { computed, onMounted } from 'vue'

import { usePokedexStore } from '@/stores/pokedex'
import PokemonItem from '@/components/PokemonItem.vue'

const pokedexStore = usePokedexStore()

onMounted(() => {
  pokedexStore.getPokemon()
})

const pokemonList = computed(() => {
  return pokedexStore.pokemonList
})
</script>
<template>
  <h1 class="text-white text-xl tracking-wide">Pokédex</h1>
  <PokemonItem v-for="pokemon in pokemonList" :key="pokemon.id" :pokemon="pokemon" />
</template>
