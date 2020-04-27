<template>
    <div
        class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"
    >
        <div
            class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        ></div>

        <div
            class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
        >
            <div
                class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
            >
                <svg
                    class="fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                >
                    <path
                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    ></path>
                </svg>
                <span class="text-sm">(Esc)</span>
            </div>

            <!-- Add margin if you want to see some of the overlay behind the modal-->
            <div class="modal-content py-4 text-left px-6">
                <!--Title-->
                <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold">Update Avatar</p>
                    <div class="modal-close cursor-pointer z-50">
                        <svg
                            class="fill-current text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                        >
                            <path
                                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                            ></path>
                        </svg>
                    </div>
                </div>

                <!--Body-->
                <div class="custom-file">
                    <input
                        id="uploadFile"
                        ref="uploadFile"
                        type="file"
                        :class="[
              'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ',
              $page.errors.photo ? 'border-red-500' : ''
            ]"
                        accept="image/*"
                        @change="handleUploadChange"
                    />
                    <label class="custom-file-label" for="uploadFile">
                        Drop Files Here to upload
                    </label>
                    <p v-if="$page.errors.photo" class="text-red-500 text-xs italic">
                        {{ $page.errors.photo[0] }}
                    </p>
                </div>

                <!--Footer-->
                <div class="flex justify-end pt-2">
                    <button
                        class="px-4 bg-gray-300 p-3 rounded-lg text-indigo-500 hover:bg-gray-500 hover:text-indigo-400 mr-2"
                        type="button"
                        @click="upload"
                    >
                        {{ button }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'UploadModal',
        data() {
            return {
                file: null,
                button: 'Update',
            }
        },
        computed: {
            user() {
                return this.$page.auth.user
            }
        },
        mounted() {
            const vm = this
            const openmodal = document.querySelectorAll('.modal-open')
            for (let i = 0; i < openmodal.length; i++) {
                openmodal[i].addEventListener('click', function (event) {
                    event.preventDefault()
                    vm.toggleModal()
                })
            }

            const overlay = document.querySelector('.modal-overlay')
            overlay.addEventListener('click', this.toggleModal)

            const closemodal = document.querySelectorAll('.modal-close')
            for (let i = 0; i < closemodal.length; i++) {
                closemodal[i].addEventListener('click', this.toggleModal)
            }

            document.onkeydown = function (evt) {
                evt = evt || window.event
                let isEscape = false
                if ('key' in evt) {
                    isEscape = evt.key === 'Escape' || evt.key === 'Esc'
                } else {
                    isEscape = evt.keyCode === 27
                }
                if (isEscape && document.body.classList.contains('modal-active')) {
                    vm.toggleModal()
                }
            }
        },
        methods: {
            handleUploadChange() {
                this.file = this.$refs.uploadFile.files[0]
            },
            upload() {
                if (!this.file) {
                    return
                }
                this.button = 'Uploading ...'
                const bodyFormData = new FormData()
                bodyFormData.append('photo', this.file)

                this.$inertia.post(route('avatar'), bodyFormData)
                    .then(() => {
                        this.button = 'Upload'
                        this.clear()
                        this.toggleModal()
                    })
            },
            clear() {
                const input = this.$refs.uploadFile
                input.type = 'text'
                input.type = 'file'
            },
            toggleModal() {
                const body = document.querySelector('body')
                const modal = document.querySelector('.modal')
                modal.classList.toggle('opacity-0')
                modal.classList.toggle('pointer-events-none')
                body.classList.toggle('modal-active')
            }
        }
    }
</script>

<style lang="scss" scoped></style>
