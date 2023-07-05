<script setup lang="ts">

import { Archives, Games, Game } from '@/utils/types/gameData';
import { parsePgn } from '@/utils/ts/parsePgn';
import { shuffleArray } from '@/utils/ts/utilities';


const route = useRoute()
let isLoading = ref(true);
let playerData = ref<Game[]>([]);
let username = ref<string>(route.params.username as string)
const progress = ref(0);

let loadingTextIndex = ref(0);
let loadingText = ["LOL, You Thought", "You Played Yourself", "Are You From Ohio? I Can Tell", "Get Wrecked Son", "Suck Eggs", "Chortle on This Pawn", "You Have a Lot in Common With My Pet Rabbit", "Getting Your Results", "Wasting Your Time", "Checkmating You", "Flagging You", "Lubricating The Catapult", "Misspelling Your Username On Purpose", "Being Bored By Your Existence", "Laughing At How Bad You Are", "Cringing At How Much You Suck At Chess", "You Play Chess? Ha, What a Nerd", "Get Owned Pleb", "Questioning Your Existence", "You Suck", "🤔", "Hurry Up Chess.com", "You've Got No Life", "Am I offending you? Good", "Looks Like we've Found The Village Idiot", "Was It Really Worth It?", "Go Back To School Nerd", "I Don't Care What Anyone Says, I Think You're Funny", "This is Officially Unoficially By Chess.com", "I Can See Why You're Bullied", "Bow Down To Me","You Pillock", "You Ninnyhammer", "You Snollygoster", "You're so fat, when you lay on memory foam it forgets everything", "You're not stupid, just constantly unlucky when you try thinking", "If zombies invaded, you would be completely safe... zombies eat brains", "You are so old that you preordered the bible", "You're a Piece of Trash", "Can You Read?", "Get a life bro"]
shuffleArray(loadingText)

setInterval(() => {
    loadingTextIndex.value++;
    if (loadingTextIndex.value === loadingText.length) {
        loadingTextIndex.value = 0;
    }
}, 3000);

const fetchData = async () => {
    const localStorageData = localStorage.getItem(username.value.toLowerCase())
    if (localStorageData !== null) {
        playerData.value = JSON.parse(localStorageData);
        isLoading.value = false;
        return
    }

    // @ts-ignore random error appears from adding svg in LoadingIndicator component (makes literally zero fucking sense)
    const { data, error } = await useAsyncData(() => $fetch(`https://api.chess.com/pub/player/${username.value}/games/archives`));
    if (error.value) {
        console.log(error.value)
        return
    }

    const archives = data.value as Archives
    for (let i = 0; i < archives.archives.length; i++) {
        const archive = archives.archives[i];
        progress.value = i / archives.archives.length;
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
    username.value = getCapitalisedUsername(playerData.value)
    isLoading.value = false

    // won't work for most data (too large), have to store results rather than raw data in local storage
    localStorage.setItem(username.value.toLowerCase(), JSON.stringify(playerData.value))
}

function getCapitalisedUsername(playerData: Game[]): string {
    if (playerData.length > 0) {
        if (playerData[0].white.username.toLowerCase() === username.value.toLowerCase()) {
            return playerData[0].white.username
        } else {
            return playerData[0].black.username
        }
    }
    return username.value
}

onMounted(async () => {
    fetchData();
});



</script>

<template>
    <div v-if="isLoading" class="loading-section">
        <h1 class="loading-title">
            {{ loadingText[loadingTextIndex] }}
        </h1>
        <LoadingIndicator :progress="progress" />
        <h1 class="percentage-indicator">
            {{ Math.round(progress * 100) }}%
        </h1>
    </div>

    <PlayerStats :username="username" :player-data="playerData" v-else />
</template>

<style>
.loading-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    align-items: center;
    padding-top: 5em;
}

.percentage-indicator {
    color: var(--globalColorThemeHigh);
    padding: 1em;
}

.loading-title {
    color: var(--globalColorThemeFull);
    padding-bottom: 1.5em;
    text-align: center;
    padding: 1em;
    height: 3.5em;
    max-width: 15em;
}
</style>