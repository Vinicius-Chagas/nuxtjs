<template>
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form class="w-1/4">
            <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left w-full">
                <div class="text-gray-50 mb-4">
                    <Combobox 
                        v-model="jobType" 
                        model-label="Job Type" 
                        place-holder="Job type" 
                        :options="Object.entries(JobType).map(([key, value]) => ({
                        label: key,
                        value: value
                    }))"/>
                </div>
                <h1 class="text-3xl font-bold mb-4">
                    <CustomInput v-model="jobTitle" model-label="Job Title" place-holder="Job title"/>
                </h1>
                <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                <p class="text-orange-700">
                    <CustomInput v-model="location" model-label="Location" place-holder="Location"/>
                </p>
                </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6 w-full">
                <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>

                <p class="mb-4">
                <CustomInput v-model="description" model-label="Job Description" place-holder="Job description"/>
                </p>

                <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

                <p class="mb-4"><CustomInput v-model="salary" model-label="Salary" place-holder="$$k - $$K"/></p>
            </div>
            <div class="flex items-center justify-center p-6 rounded-lg mt-6 w-full">
                <GreenButton text="Submit" :on-submit="handleCreateJob" />
            </div>
        </form>
    </main>
</template>

<script setup lang="ts">
import { JobType, useCreateJobMutation } from '@/types/graphql';

const jobType = useState<JobType>('jobType', () => JobType.FullTime);
const description = useState<string>('description', () => '');
const jobTitle = useState<string>('jobTitle', () => '');
const location = useState<string>('location', () => '');
const salary = useState<string>('salary', () => '');
const { mutate } = useCreateJobMutation();

watchEffect(() => {
  console.log({
    jobType: jobType.value,
    description: description.value,
    jobTitle: jobTitle.value,
    location: location.value,
    salary: salary.value
  });
});

const handleCreateJob = async () => {
    const result = await mutate({
    job: {
        jobTitle: jobTitle.value,
        jobType: jobType.value,
        description: description.value,
        location: location.value,
        salary: salary.value
    }
    });

    result?.errors?.forEach((error) => {
        console.error('Error creating job:', error.message);
    });

    
}
</script>