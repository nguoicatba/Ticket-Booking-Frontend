<template>
  <a-space direction="vertical">
    <a-button :type="type"
              :class="customClass"
               @click="click">
             {{ title }}
    </a-button>
  </a-space>  
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { PoweroffOutlined } from '@ant-design/icons-vue';

defineProps<{
  title: string,
  type: string,
  click: Function,
  customClass ?: string | string[] | Record<string, boolean>
}>()

</script>

