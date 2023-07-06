<script setup lang="ts">
import { AccountInfo } from 'utils/types/apiData';


defineProps<{
    accountInfo: AccountInfo
}>()

</script>

<template>
    <div class="player-header-component v5-section">


        <img v-if="accountInfo.profilePicUrl" height="83" width="83" alt="" :src="accountInfo.profilePicUrl">
        <img v-else src="https://www.chess.com/bundles/web/images/user-image.007dad08.svg" class="profile-pic"/>

        <div class="player-header-wrap">
            <div class="username-header">
                <div v-if="accountInfo.title" class="player-header-title">{{ accountInfo.title }}</div>
                <div class="username">{{ accountInfo.username }}</div>
            </div>
            <div class="player-header-subheader">{{ accountInfo.name }}</div>
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

.profile-pic {
    height: 83px;
    width: 83px;
}

</style>