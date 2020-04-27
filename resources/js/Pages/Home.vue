<template>
    <div>
        <br>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <logo :avatar="user.avatar"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ user.name }}</div>
                <p class="text-gray-700 text-base">
                    {{ user.email }}
                </p>
            </div>
            <div class="px-6 py-4">
          <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            <button class="modal-open">{{ button_2 }}</button>
          </span>

                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
            <a href="#" @click.prevent="logout">{{ button }}</a>
          </span>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from "../components/Logo";

    export default {
        name: "Home",
        components: {Logo},
        data() {
            return {
                button: 'Logout',
                button_2: 'Change Avatar'
            }
        },
        computed: {
            user() {
                // console.log(this.$store.state)
                return this.$page.auth.user
            }
        },
    }
</script>

<style scoped>

</style>
