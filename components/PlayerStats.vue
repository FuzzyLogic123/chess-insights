<script setup lang="ts">
import { Game } from 'utils/types/apiData';


defineProps<{
  username: string,
  playerData: Game[],
  name: string,
  profilePic: string,
  title?: string
}>()


</script>

<template>
    <div class="container">
        <Header />

        <PlayerHeader :username="username" :name="name" :profilePic="profilePic" :title="title"/>
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
</style>utils/types/apiData