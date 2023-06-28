<script setup lang="ts">

const username = ref("");
const router = useRouter();

const submitUsername = () => {
    if (username.value === "") {
        return;
    }
    router.push({
        path: "/insights/" + username.value
    })
}


</script>

<template>

    <input placeholder="chess.com username" v-model="username"/>

    <button @click="submitUsername" :disabled="username.length === 0">Submit</button>


</template>
