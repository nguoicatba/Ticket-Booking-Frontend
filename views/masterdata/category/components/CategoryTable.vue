<template>
  <a-table
    :columns="columns"
    :row-key="(record:any) => record.id"
    :data-source="dataSource"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">text</template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import type { TableProps } from 'ant-design-vue';
import { usePagination } from 'vue-request';
import axios from 'axios';
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: 'Slug',
    dataIndex: 'slug',
  },
];

type APIParams = {
  results: number;
  page?: number;
  sortField?: string;
  sortOrder?: number;
  [key: string]: any;
};
type APIResult = {
  results: {
    id: number,
    name: string;
    slug: string;
  }[];
};

const queryData = (params: APIParams) => {
  return axios.get<APIResult>('http://backend-kcb.test/api/category', { params });
};

const {
  data,
  run,
  loading,
  current,
  pageSize,
} = usePagination(queryData, {
  pagination: {
    currentKey: 'page',
    pageSizeKey: 'results',
  },
});

const dataSource = computed(() => data.value?.data?.results ?? []);

const pagination = computed(() => ({
  total: 200,
  current: current.value,
  pageSize: pageSize.value,
}));

const handleTableChange: TableProps['onChange'] = (
  pag: { pageSize: number; current: number },
  filters: any,
  sorter: any,
) => {
  run({
    results: pag.pageSize,
    page: pag?.current,
    sortField: sorter.field,
    sortOrder: sorter.order,
    ...filters,
  });
};
</script>

