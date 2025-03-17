<template>
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form class="w-1/4">
            <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left w-full">
                <div class="text-gray-50 mb-4">
                    <CustomInput model-label="Job Type" model-value="" place-holder="Job type"/>
                </div>
                <h1 class="text-3xl font-bold mb-4">
                    <CustomInput model-label="Job Title" model-value="" place-holder="Job title"/>
                </h1>
                <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                <p class="text-orange-700">
                    <CustomInput model-label="Location" model-value="" place-holder="Location"/>
                </p>
                </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6 w-full">
                <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>

                <p class="mb-4">
                <CustomInput model-label="Job Description" model-value="" place-holder="Job description"/>
                </p>

                <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

                <p class="mb-4"><CustomInput model-label="Salary" model-value="" place-holder="$$k - $$K"/></p>
            </div>
            <div class="flex items-center justify-center p-6 rounded-lg mt-6 w-full">
                <GreenButton text="Submit"/>
            </div>
        </form>
    </main>
</template>

<script setup lang="ts">

</script>