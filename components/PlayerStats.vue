<script setup lang="ts">

defineProps<{
  username: string
}>()


</script>

<template>
    <div class="container">
        <Header />

        <PlayerHeader :username="username" :name="'Snekith Karywasm'"/>
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