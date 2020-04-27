<template>
    <div>
        <div v-if="avatar === null">
            <img class="w-full" src="https://magak.me/assets/images/Geek-logo.png" alt="img">
        </div>
        <div v-else>
            <img :src="avatar" alt="img" class="w-full" />
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Logo',
        props: { avatar: String }
    }
</script>
<style>
    .NuxtLogo {
        animation: 1s appear;
        margin: auto;
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
