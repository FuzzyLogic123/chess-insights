<script setup lang="ts">
import { AccountInfo, Game } from 'utils/types/apiData';


defineProps<{
  accountInfo: AccountInfo
  playerGames: Game[],
}>()


</script>

<template>
    <div class="container">
        <Header />

        <PlayerHeader :account-info="accountInfo" />
        <!-- <Stockfish /> -->
        <Overview :player-games="playerGames" :username="accountInfo.username"/>
    </div>
</template>

<style>

.container {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
}
</style>utils/types/apiData