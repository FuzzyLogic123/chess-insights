<template>
    <h1 class="v5-title">
        <img class="icon" src="~/assets/icons/lightbulb.svg" alt="lightbulb" />
        <span class="v5-title-has-icon idea">
            Insights
        </span>
    </h1>
</template>

<style>
.v5-title {
    color: #fff;
    font-family: var(--globalSecondaryFont);
    font-size: 2.8rem;
    font-size: clamp(2rem,4vw,2.8rem);
    font-weight: 600;
    line-height: 1;
    padding: 1rem 1rem 0;
    position: relative;
    align-items: center;
    display: flex;
}

.v5-title-has-icon {
    align-items: center;
    display: inline-flex;
    padding-left: 5.6rem;
    padding-left: clamp(3.6rem,6vw,5.6rem);
    position: relative;
    text-shadow: 0.2rem 0.1rem rgba(48,45,43,.3);
}

.icon {
    height: 2.5rem;
    /* left: 0; */
    position: absolute;
}

</style>