<template>
  <Job :job="job" @delete="deleteJob"/>
  </template>
  
<script setup lang="ts">
import { useDeleteJobMutation, useGetOneJobLazyQuery } from '@/types/graphql';

const route = useRoute()
const id = route.params.id as string

const { result } = useGetOneJobLazyQuery({ id })
const job = result.value?.findOneJob

const { mutate: deleteJob } = useDeleteJobMutation({
  variables: {
    id
  }
})

</script>
  