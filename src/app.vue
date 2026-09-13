<script setup>

import { ref } from 'vue'
import RouterTabs from './components/RouterTabs.vue'

</script>

<template>
    <RouterTabs />
    <Suspense>
        <RouterView>
        </RouterView>
    </Suspense>
</template>