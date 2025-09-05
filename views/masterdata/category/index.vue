<template>
    <BasicButton type="primary" title="hello word" :click="onClick" ></BasicButton>
    <CategoryTable></CategoryTable>
    
</template>


<script lang="ts" setup>
import CategoryTable from './components/CategoryTable.vue';
import BasicButton from '@/components/Button/BasicButton.vue';
import BasicModal from '@/components/Modal/BasicModal.vue';

function onClick(){
    console.log("hello world");
}

</script>