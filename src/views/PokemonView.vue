<script setup lang="ts">
import { onMounted } from 'vue'

import { usePokemonStore } from '@/stores/pokedex'
import PokemonItem from '@/components/PokemonItem.vue'

const pokemonStore = usePokemonStore()

onMounted(() => {
  pokemonStore.getPokemon()
})
</script>
<template>
  <div class="text-3xl font-bold underline">listado de pokemon</div>
  <PokemonItem />
</template>
