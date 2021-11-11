<template>
    <div class="component">


    </div>
</template>


<script>
    import { logger } from '../utils/Logger'
    // import { Pop } from '../utils/Pop'
    export default {
        props: { blog: { type: Object, required: true } },
        setup() {
            return {
                async getAll() {
                    try {
                        await blogsService.getAll()
                    } catch (error) {
                        logger.error(error)
                        Pop.toast(error.message, 'Error, man')
                    }
                }
            }
        }
    }
</script>


<style lang="scss" scoped>

</style>