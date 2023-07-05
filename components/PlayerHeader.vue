<script setup lang="ts">

defineProps<{
  username?: string
  name?: string,
}>()

</script>

<template>
    <div class="player-header-component v5-section"><img height="83" width="83" alt=""
            src="/assets/images/sample-pfp.jpeg">

        <div class="player-header-wrap">
            <div class="username-header">
                <div class="player-header-title">CT</div>
                <div class="username">{{ username }}</div>
            </div>
            <div class="player-header-subheader">{{ name }}</div>
        </div>
    </div>
</template>

<style scoped>
.player-header-component {
    align-items: center;
    display: flex;
    gap: 1.2rem;
    padding: 1.2rem;
}

.player-header-wrap {
    overflow: hidden;
}

.username-header {
    align-items: center;
    color: var(--globalColorThemeFull);
    display: flex;
    font-size: 2.2rem;
    font-weight: 800;
    gap: 0.5rem;
    max-height: 3.4rem;
}

.username {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.v5-section {
    background-color: var(--globalBackground);
    border-radius: 0.5rem;
    color: var(--globalColorThemeFullToMid);
}

.player-header-subheader {
    color: var(--globalColorThemeHighToMid);
    font-size: 1.5rem;
    height: 2rem;
}

.player-header-title {
    background-color: #b23330;
    border-radius: 0.3rem;
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
    padding: 0.2rem 0.3rem;
}


</style>