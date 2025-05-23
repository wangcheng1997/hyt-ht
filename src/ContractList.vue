<template>
  <div>
    <h1>合同列表</h1>
    <button @click="showCreateDialog = true">新建合同</button>
    
    <!-- 筛选条件 -->
    <input v-model="searchKeyword" placeholder="搜索项目名称">
    <select v-model="filterStatus">
      <option value="all">全部状态</option>
      <option value="active">进行中</option>
      <option value="expired">已逾期</option>
    </select>

    <!-- 合同表格 -->
    <table>
      <tr v-for="contract in filteredContracts" :key="contract.id">
        <td>{{ contract.project_name }}</td>
        <td>{{ contract.start_date }}</td>
        <td>{{ contract.total_amount }}</td>
        <td>
          <button @click="openProgress(contract.id)">更新进度</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const supabase = inject('supabase')

// 数据获取
const contracts = ref([])
supabase.from('contracts').select('*')
  .then(({ data }) => contracts.value = data)

// 筛选逻辑
const searchKeyword = ref('')
const filterStatus = ref('all')
const filteredContracts = computed(() => {
  return contracts.value.filter(c => {
    const matchKeyword = c.project_name.includes(searchKeyword.value)
    const isExpired = new Date(c.end_date) < new Date()
    const matchStatus = filterStatus.value === 'all' || 
      (filterStatus.value === 'expired' ? isExpired : !isExpired)
    return matchKeyword && matchStatus
  })
})
</script>