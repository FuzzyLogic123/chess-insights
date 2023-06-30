<script setup lang="ts">

import { Archives, Games, Game } from '@/utils/types/gameData';
import { parsePgn } from '@/utils/ts/parsePgn';


const route = useRoute()
let isLoading = ref(true);
let playerData = ref<Game[]>([]);

const fetchData = async () => {
    const { data, error } = await useAsyncData(() => $fetch(`https://api.chess.com/pub/player/${route.params.username}/games/archives`));
    if (error.value) {
        console.log(error.value)
        return
    }

    const archives = data.value as Archives
    for (const archive of archives.archives) {
        const { data } = await useAsyncData(() => $fetch(archive))
        const games = data.value as Games
        if (games.games.length > 0) {
            for (let i = 0; i < games.games.length; i++) {
                games.games[i].moves = parsePgn(games.games[i].pgn)
                playerData.value.push(games.games[i])
            }
        }
    }
    console.log(playerData.value)
    isLoading.value = false
}

onMounted(async () => {
    fetchData()
});



</script>

<template>
    <div v-if="isLoading" style="color: white;">
        loading
    </div>

    <PlayerStats :username="route.params.username as string" v-else />
</template>

<style></style>