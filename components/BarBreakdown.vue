<script setup lang="ts">
import { sum } from '@/utils/ts/utilities'

const props = defineProps<{
    wld: number[]
}>()

console.log(props.wld);
console.log(sum(props.wld))

const winPercentage = computed(() => Math.round(props.wld[0] / sum(props.wld) * 1000) / 10)
const lossPercentage = computed(() => Math.round(props.wld[1] / sum(props.wld) * 1000) / 10)
const drawPercentage = computed(() => Math.round(props.wld[2] / sum(props.wld) * 1000) / 10)

</script>

<template>
    <div class="wdl-breakdown-container">
        <div class="wdl-breakdown-gameBreakdown">
            <div>
                <div class="wdl-block-row"><span class="icon-font-chess square-plus wdl-block-win wdl-block-icon"></span>
                    <span>{{ winPercentage }}%</span>
                </div>
                <div class="wdl-breakdown-subText">{{ wld[0] }} Won</div>
            </div>
            <div>
                <div class="wdl-block-row"><span class="icon-font-chess square-equal wdl-block-icon"></span>
                    <span>{{ drawPercentage }}%</span>
                </div>
                <div class="wdl-breakdown-subText">{{ wld[2] }} Drawn</div>
            </div>
            <div>
                <div class="wdl-block-row"><span class="icon-font-chess square-minus wdl-block-loss wdl-block-icon"></span>
                    <span>{{ lossPercentage }}%</span>
                </div>
                <div class="wdl-breakdown-subText">{{ wld[1] }} Lost</div>
            </div>
        </div>
        <div class="tricolor-bar-small-container">
            <span class="tricolor-bar-small-win" :style="`flex-grow: ${winPercentage};`" />
            <span :style="`flex-grow: ${drawPercentage};`" />
            <span class="tricolor-bar-small-loss" :style="`flex-grow: ${lossPercentage};`" />
        </div>
    </div>
</template>

<style>
/* flex grow to decide how much of the bar each segment takes up */

.tricolor-bar-small-container .tricolor-bar-small-loss {
    background-color: var(--globalColorLoss);
}

.tricolor-bar-small-container .tricolor-bar-small-win {
    background-color: var(--globalColorWin);
}

.tricolor-bar-small-container {
    background-color: var(--globalColorThemeMid);
    border-radius: 2rem;
    display: flex;
    height: 1.2rem;
    overflow: hidden;
    width: 100;
}

.icon-font-chess.square-minus:before {
    content: "\1F02";
}


.wdl-block-row .wdl-block-icon {
    color: var(--globalColorThemeMid);
    font-size: 2.8rem;
}

.wdl-block-row .wdl-block-loss {
    color: var(--globalColorLoss);
}

.icon-font-chess.square-equal:before {
    content: "\1F03";
}

.icon-font-chess.square-plus:before {
    content: "\1F01";
}

.wdl-block-row .wdl-block-win {
    color: var(--globalColorWin);
}


@media (max-width: 47.938em) {
    .wdl-breakdown-container {
        width: 100%;
    }
}

.wdl-breakdown-container {
    grid-gap: 0.8rem;
    display: flex;
    flex-direction: column;
}

@media (max-width: 47.938em) {
    .wdl-breakdown-gameBreakdown {
        grid-gap: 0;
        justify-content: space-between;
    }
}

.wdl-breakdown-gameBreakdown {
    grid-gap: 3.2rem;
    color: var(--globalColorThemeFull);
    display: flex;
    font-size: 2.8rem;
}

@media (max-width: 47.938em) {
    .wdl-block-row {
        font-size: 2rem;
    }
}

.wdl-block-row {
    align-items: center;
    color: var(--globalColorThemeFull);
    display: flex;
    font-size: 2.8rem;
    font-weight: 700;
}

.wdl-breakdown-gameBreakdown .wdl-breakdown-subText {
    color: var(--globalColorThemeHigh);
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: auto;
    margin-top: -0.5rem;
    text-align: end;
}
</style>