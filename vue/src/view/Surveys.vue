<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Surveys</h1>
        <router-link
         :to="{name: 'SurveyCreate'}"
         class="
         py-2
         px-3
         text-white
         bg-emerald-500
         rounded-md
         hover:big-emerald-600"

          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" h-4 w-4 -mt-1 inline-block size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>

          Add New Survey
         </router-link>

    </div>
    </template>

  </PageComponent>

</template>

<script setup>
   import PageComponent from '../components/PageComponent.vue';
</script>
