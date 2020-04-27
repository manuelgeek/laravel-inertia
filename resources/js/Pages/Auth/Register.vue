<template>
    <div class="w-full h-full max-w-xs  self-center">
        <div class="row-start-2 row-span-2 text-blue-600 text-center">
            <h3 class="text-5xl">Register Page</h3>
        </div>
        <flash-message/>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="register">
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                >
                    Name
                </label>
                <input
                    id="username"
                    v-model="form.name"
                    :class="[
            'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline',
            $page.errors.name ? 'border-red-500' : ''
          ]"
                    type="text"
                    placeholder="Name"
                />
                <p v-if="$page.errors.name" class="text-red-500 text-xs italic">
                    {{ $page.errors.name[0] }}
                </p>
            </div>
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
            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password_c"
                >
                    Password Confirm
                </label>
                <input
                    id="password_c"
                    v-model="form.password_confirmation"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Confirm Password"
                />
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
                    href="/login"
                >
                    Sign In?
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
        name: "Register",
        components: {FlashMessage},
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                button: 'Sign Up',
            }
        },
        methods: {
            register() {
                this.button = 'Signing Up ...'
                this.$inertia.post('/register', this.form)
            },
        },
        watch: {

            '$page.errors': {
                handler() {
                    this.button = 'Sign Up'
                },
            },
        },
    }
</script>

<style scoped>

</style>
