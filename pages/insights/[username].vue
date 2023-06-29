<script setup lang="ts">
import { Moves } from 'utils/parsePgn';

// import { parsePgn } from '@/utils/parsePgn.ts';

type Archives = {
    archives: string[]
}

interface Game {
    url: string;
    pgn: string;
    time_control: string;
    end_time: number;
    rated: boolean;
    tcn: string;
    uuid: string;
    initial_setup: string;
    fen: string;
    start_time: number;
    time_class: string;
    rules: string;
    white: Player;
    black: Player;
    moves: Moves;
}

interface Player {
    rating: number;
    result: string;
    "@id": string;
    username: string;
    uuid: string;
}

type Games = {
    games: Game[];
};

// type Moves = string[];

const route = useRoute()
let isLoading = ref(true);
let playerData = ref<Game[]>([]);

const fetchData = async () => {
    const { data, error } = await useAsyncData(() => $fetch(` https://api.chess.com/pub/player/${route.params.username}/games/archives`));
    if (error.value) {
        console.log(error.value)
        return
    }

    const archives = data.value as Archives
    for (const archive of archives.archives) {
        const { data } = await useAsyncData(() => $fetch(archive))
        const games = data.value as Games
        if (games.games.length > 0) {
            console.log(games.games[0])
            games.games[0].moves = parsePgn(games.games[0].pgn)
            playerData.value.push(games.games[0])
            // break
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