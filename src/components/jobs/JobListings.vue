<template>
  <section class="pg-blue-50 py-10 px4">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl text-green-500 font-bold mb-6 text-center">Browse Jobs</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing v-for="job in result?.findAllJobs.slice(0, limit || result?.findAllJobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>

<script setup lang="ts">
import { useGetJobsListingLazyQuery } from '@/types/graphql';
import { RouterLink } from 'vue-router';

defineProps({
  limit: {
    type: Number,
    required: false,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
})

const { result, load } = useGetJobsListingLazyQuery()

onMounted(() => load())

</script>

<style scoped></style>
