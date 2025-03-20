<template>
    <div class="w-full">
        <label :for="modelLabel" class="text-black text-sm">{{ modelLabel }}</label>
        <input :id="modelLabel" type="text" class="w-full rounded-md shadow-sm h-[40px] text-sm text-black" :placeholder="placeHolder" @input="$updateInputValue" >
    </div>
</template>

<script setup lang="ts">
defineProps({
    modelLabel: {
        type: String,
        required: true
    },
    modelValue: {
        type: String,
        required: true
    },
    placeHolder: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue']);

const $updateInputValue = (event: Event) => {
  const input = event.target as HTMLInputElement
  emit('update:modelValue', input.value)
}
</script>