<script setup lang="ts">
const props = defineProps(['pokemon'])
</script>

<template>
  <article
    class="w-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 glow-border border-2 border-transparent relative"
  >
    <!-- Corner status dot (puedes cambiar color por tipo) -->
    <div class="absolute top-3 left-3 w-3 h-3 rounded-full bg-green-400 shadow-md"></div>

    <!-- Top: image centered in circular frame -->
    <div class="flex items-center justify-center -mt-6">
      <div class="bg-gray-800 rounded-full p-3 avatar-ring">
        <img
          :src="props.pokemon.sprites.other.dream_world.front_default"
          alt="Imagen del Pokémon"
          class="w-36 h-36 object-contain rounded-full bg-gradient-to-b from-gray-700 to-gray-800 p-1"
        />
      </div>
    </div>

    <!-- Nombre -->
    <header class="text-center mt-4">
      <h2 class="text-white text-xl font-semibold tracking-wide">{{ props.pokemon.name }}</h2>
      <p class="text-sm text-gray-400 mt-1">#{{ props.pokemon.order }}</p>
    </header>

    <!-- Peso / Altura -->
    <div class="mt-4 flex justify-between items-center px-3">
      <div class="flex items-center space-x-2">
        <!-- Icono peso -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-gray-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 3v6m0 6v6M5 12h14"
          />
        </svg>
        <div>
          <div class="text-xs text-gray-400">Peso</div>
          <div class="text-sm text-white font-medium">{{ props.pokemon.weight }} kg</div>
        </div>
      </div>

      <div class="flex items-center space-x-2">
        <!-- Icono altura -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-gray-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 21h18M12 3v18"
          />
        </svg>
        <div>
          <div class="text-xs text-gray-400">Altura</div>
          <div class="text-sm text-white font-medium">{{ props.pokemon.height }} m</div>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-700 mt-4"></div>

    <!-- Tipo y acciones -->
    <div class="mt-3 px-3 flex items-center justify-between">
      <!-- Tipo badge: cambia color según tipo -->
      <span
        class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-600/20 text-emerald-300 border border-emerald-600"
      >
        <!-- pequeño icono -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 2l2 7h7l-5.5 4 2 7L12 17l-5.5 3 2-7L3 9h7l2-7z"
          />
        </svg>
        Grass / Poison
      </span>

      <!-- Acción demo (por ejemplo ver más) -->
      <button
        class="text-sm text-gray-300 hover:text-white px-3 py-1 rounded-md border border-gray-700 hover:bg-gray-800/50"
      >
        Ver ficha
      </button>
    </div>
  </article>
</template>

<style>
/* Efecto de glow suave para el borde de la card */
.glow-border {
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.6),
    0 0 0 4px rgba(255, 255, 255, 0.02) inset;
}
/* pequeños ajustes para el contorno del avatar */
.avatar-ring {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}
</style>
