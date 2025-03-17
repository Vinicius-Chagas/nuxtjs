<template>
    <div class="w-full">
        <label for="jobType" class="text-black text-sm">{{ modelLabel }}</label>
        <input id="jobType" type="text" class="w-full rounded-md shadow-sm h-[40px] text-sm text-black" :placeholder="placeHolder" :value="modelValue" @input="handleInput" >
    </div>
</template>

<script setup lang="ts">
const {modelLabel, modelValue, placeHolder} = defineProps({
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

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>