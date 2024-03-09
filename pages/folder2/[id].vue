<!-- Here is how to catch the id using sript setup -->
<template>
    <div>
   <p>Product Details for: {{ id}}</p>
    </div>
</template>

<script setup>
const {id}  = useRoute().params
</script>