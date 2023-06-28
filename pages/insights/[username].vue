<script setup lang="ts">

</script>

<template>
    <div class="container">
        <Header />

        <PlayerHeader :username="'anonymousK'" :name="'Snekith Karywasm'"/>
        <!-- <Stockfish /> -->
        <Overview />
    </div>
</template>

<style>

.container {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
}
</style>