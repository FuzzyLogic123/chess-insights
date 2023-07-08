<script lang="ts" setup>
const props = defineProps<{
    progress: number
}>()


const spinner = ref<HTMLElement | null>(null);
const magicNumber = 236;

watch(props, async (props) => {
    if (spinner.value) {
        spinner.value.style.strokeDasharray = `${magicNumber * props.progress}, ${magicNumber - magicNumber * props.progress}`;
    }
})


</script>

<template>
    <svg width="63" height="63" fill="none" viewBox="0 0 63 63" class="loading-screen-rect">

        <rect width="59" height="59" x="2" y="2" stroke-width="4" rx="8" class="loading-screen-rectangle" />
        <path width="59" height="59" d="M2 10C2 5.58172 5.58172 2 10 2H32H53C57.4183 2 61 5.58172 61 10V53C61
      57.4183 57.4183 61 53 61H10C5.58172 61 2 57.4183 2 53V10Z" x="2" y="2" stroke-width="4" rx="8"
            class="loading-screen-loading" ref="spinner" />
        <svg width="63" height="51" fill="none" viewBox="0 -15 31 51">
            <path fill-opacity="0.65"
                d="M30.38 26.556c.414.413.62.812.62 1.19 0 .584-.399 1.273-1.19 2.068-.79.79-1.48 1.186-2.068 1.186-.413 0-.826-.206-1.239-.62l-5.423-5.423c-2.31 1.48-4.805 2.218-7.492 2.218-2.446 0-4.71-.609-6.792-1.833-2.086-1.222-3.738-2.877-4.962-4.959C.612 18.301 0 16.033 0 13.591s.612-4.71 1.834-6.795C3.058 4.714 4.71 3.058 6.796 1.837 8.878.612 11.142 0 13.588 0c2.446 0 4.71.612 6.795 1.834 2.086 1.22 3.737 2.876 4.962 4.958 1.221 2.086 1.834 4.35 1.834 6.796 0 2.719-.76 5.217-2.271 7.492l5.473 5.476zm-11.729-4.21c1.55-.913 2.782-2.145 3.695-3.695.914-1.55 1.369-3.237 1.369-5.063 0-1.827-.455-3.514-1.369-5.064-.913-1.55-2.145-2.778-3.695-3.695-1.55-.91-3.237-1.365-5.063-1.365-1.823 0-3.514.455-5.064 1.368-1.55.914-2.782 2.146-3.695 3.696-.91 1.55-1.365 3.236-1.365 5.063 0 1.827.455 3.513 1.368 5.064.914 1.55 2.146 2.781 3.696 3.695 1.55.913 3.236 1.368 5.063 1.368 1.823 0 3.51-.458 5.06-1.372z"
                class="loading-screen-mag" />
            <svg width="25" height="25" fill="none" viewBox="-1 -1 25 25">
                <path fill-opacity="0.65"
                    d="M12.608 12.541l6.878-4.812c.871 1.245 1.366 2.613 1.488 4.102.12 1.494-.128 2.917-.746 4.28-.618 1.361-1.544 2.47-2.786 3.338l-4.834-6.908zM5.7 17.375c-.868-1.242-1.358-2.605-1.473-4.092-.112-1.488.141-2.912.766-4.275.624-1.357 1.558-2.473 2.803-3.344l4.812 6.877-6.907 4.834z"
                    class="loading-screen-spinner" />
            </svg>
        </svg>
    </svg>
</template>

<style scoped>
.loading-screen-rectangle {
    stroke: var(--globalTertiaryBackground);
}

/* on the path to change progress on first path element */
/* stroke-dasharray: 32.3922, 203.608; */

/* start: stroke-dasharray: 2.36, 233.64; */
/* end:  stroke-dasharray: 235.764, 0.236; */

.loading-screen-loading {
    stroke: #85a94e;
    stroke-dashoffset: -30;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: all 1s ease;
    stroke-dasharray: 0, v-bind('magicNumber');
}

.loading-screen-mag,
.loading-screen-spinner {
    fill: var(--globalColorThemeFull);
}

.loading-screen-spinner {
    animation: loading-screen-spinner 1.5s ease infinite;
    transform-origin: 50% 50%;
}

@keyframes loading-screen-spinner {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(1turn);
    }
}
</style>
