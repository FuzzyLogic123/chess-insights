<script setup lang="ts">
import { Game } from 'utils/types/apiData';

const props = defineProps<{
    playerData: Game[],
    username: string
}>()

const winLossDraw = computed(() => {
    let wins = 0;
    let draws = 0;
    let losses = 0;

    for (let i = 0; i < props.playerData.length; i++) {
        const game = props.playerData[i];
        const winningCodes = ["win"];
        const drawCodes = ["agreed", "repetition", "stalemate", "insufficient", "50move", "timevsinsufficient"]
        const lossCodes = ["timeout", "resigned", "lose", "abandoned", "kingofthehill", "threecheck", "bughousepartnerlose", "checkmated"]

        const usersResult = game.white.username === props.username ? game.white.result : game.black.result

        if (winningCodes.includes(usersResult)) {
            wins++;
        }
        else if (drawCodes.includes(usersResult)) {
            draws++;
        } else if (lossCodes.includes(usersResult)) {
            losses++;
        }
        else {
            console.error(`Code: ${usersResult} not accounted for`);
        }
    }

    return [wins, losses, draws]
});




</script>

<template>
    <section class="v5-section">
        <div data-id="overview" class="insights-header-component">
            <div class="insights-header-header">
                <span class="icon-font-chess chess-board-search insights-header-icon"></span>

                Overview
            </div>
        </div>

        <div class="content">

            <div class="insights-category-header-component">
                Games played
            </div>

            <div class="game-overview-splitRow">

                <div class="icon-block-row">
                    <span class="icon-font-chess chess-board icon-block-icon">i</span>
                    {{ playerData.length }}
                </div>

                <BarBreakdown :wld="winLossDraw" />

            </div>
            <BarChart />
        </div>
    </section>
</template>

<style scoped>
.game-overview-splitRow {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.content {
    padding: 0.8rem;
    grid-gap: 2.4rem;
    display: flex;
    flex-direction: column;
}

@media (min-width: 20.625em) {
    .content {
        padding: 1.2rem;
    }
}

@media (min-width: 48rem) {
    .content {
        padding: 3.2rem;
    }
}




.insights-category-header-component {
    color: var(--globalColorThemeFull);
    font-size: 2rem;
    font-weight: 600;
}

.icon-block-row .icon-block-icon {
    color: var(--globalColorThemeLow);
    font-size: 4rem;
}


.insights-header-header {
    align-items: center;
    display: flex;
    height: 7.5rem;
    color: var(--globalColorThemeFull);
    font-size: 2.2rem;
    font-weight: 600;
}

@media (min-width: 48em) {
    .insights-header-component {
        padding: 0 3.2rem;
    }
}

.insights-header-component {
    background: var(--globalSecondaryBackground);
    border-radius: 0.5rem 0.5rem 0 0;
    color: var(--globalColorThemeFull);
    font-size: 2.2rem;
    font-weight: 600;
    padding: 0 1.6rem;
    margin-top: 5rem;
}

.insights-header-icon {
    color: var(--globalColorThemeMid);
    font-size: 2.4rem;
    margin-right: 0.5rem;
}

.icon-font-chess.chess-board-search:before {
    content: "\0394";
}

.v5-section {
    background-color: var(--globalBackground);
    border-radius: 0.5rem;
    color: var(--globalColorThemeFullToMid);
}

.icon-block-row {
    grid-gap: 0.8rem;
    align-items: center;
    color: var(--globalColorThemeFull);
    display: flex;
    font-size: 4rem;
    font-weight: 800;
}
</style>utils/types/apiData