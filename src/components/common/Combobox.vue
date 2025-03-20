<template>
    <div class="w-full">
        <label :for="modelLabel" class="text-black text-sm">{{ modelLabel }}</label>
        <select 
            :id="modelLabel" 
            v-model="selectedValue"
            class="w-full rounded-md shadow-sm h-[40px] text-sm text-black" 
            :placeholder="placeHolder">
            <option value="" disabled>{{ placeHolder }}</option>
            <option 
                v-for="option in options" 
                :key="option.value"
                :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Option {
    value: string | number;
    label: string;
}

const props = defineProps({
    modelLabel: {
        type: String,
        required: true
    },
    modelValue: {
        type: [String, Number],
        required: false,
        default: ''
    },
    placeHolder: {
        type: String,
        required: true
    },
    options: {
        type: Array as () => Option[],
        required: true,
    }
});

const emit = defineEmits(['update:modelValue']);

const selectedValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
});
</script>