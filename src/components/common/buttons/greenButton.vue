<template>
    <button type="submit" class="w-[150px] h-[40px] bg-green-500 rounded-md" @click.prevent="onSubmit()">
        {{ text }}
    </button>
</template>

<script setup lang="ts">
const { onSubmit } = defineProps({
    text: {
        type: String,
        default: 'submit'
    },
    onSubmit: {
        type: Function,
        default: () => {}
    }
})

</script>