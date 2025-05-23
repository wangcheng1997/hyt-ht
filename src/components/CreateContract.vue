<template>
  <dialog :open="show">
    <h2>新建合同</h2>
    <form @submit.prevent="submit">
      <label>项目名称 <input v-model="form.project_name" required></label>
      <label>合同金额 <input type="number" v-model="form.total_amount" step="0.01"></label>
      <label>开始日期 <input type="date" v-model="form.start_date"></label>
      <label>结束日期 <input type="date" v-model="form.end_date"></label>
      <button type="submit">保存</button>
    </form>
  </dialog>
</template>

<script setup>
import { inject } from 'vue'
const supabase = inject('supabase')
const emit = defineEmits(['created'])

const form = ref({
  project_name: '',
  total_amount: 0,
  start_date: '',
  end_date: ''
})

const submit = async () => {
  const { data, error } = await supabase.from('contracts')
    .insert([form.value])
  if (!error) {
    emit('created', data[0])
    form.value = {} // 清空表单
  }
}
</script>