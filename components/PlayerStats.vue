<script setup lang="ts">
import { Game } from 'utils/types/gameData';


defineProps<{
  username: string,
  playerData: Game[]
}>()


</script>

<template>
    <div class="container">
        <Header />

        <PlayerHeader :username="username" :name="'Snekith Karywasm'"/>
        <!-- <Stockfish /> -->
        <Overview :player-data="playerData" :username="username"/>
    </div>
</template>

<style>

.container {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
}
</style>