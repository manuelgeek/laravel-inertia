<template>
    <div class="w-full h-full max-w-xs  self-center">
        <div class="row-start-2 row-span-2 text-blue-600 text-center">
            <h3 class="text-5xl">Login Page</h3>
        </div>
        <flash-message/>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    id="email"
                    v-model="form.email"
                    :class="[
            'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ',
            $page.errors.email ? 'border-red-500' : ''
          ]"
                    type="email"
                    placeholder="Email"
                />
                <p v-if="$page.errors.email" class="text-red-500 text-xs italic">
                    {{ $page.errors.email[0] }}
                </p>
            </div>
            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                >
                    Password
                </label>
                <input
                    id="password"
                    v-model="form.password"
                    :class="[
            'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ',
            $page.errors.password ? ' border-red-500' : ''
          ]"
                    type="password"
                    placeholder="Password"
                />
                <p v-if="$page.errors.password" class="text-red-500 text-xs italic">
                    {{ $page.errors.password[0] }}
                </p>
            </div>
            <div>
                <a
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                >
                    Forgot Password?
                </a>
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    {{ button }}
                </button>
                <inertia-link
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="/register"
                >
                    Sign Up ?
                </inertia-link>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2020 All rights reserved.
        </p>
    </div>
</template>

<script>
    import FlashMessage from "../../components/FlashMessage";
    export default {
        name: "Login",
        components: {FlashMessage},
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                button: 'Sign In'
            }
        },
        methods: {
            login() {
                this.button = 'Signing In ...'
                this.$inertia.post('/login', this.form)
            },
        },
        watch: {

            '$page.errors': {
                handler() {
                    this.button = 'Sign In'
                },
            },
        },
    }
</script>

<style scoped>

</style>
