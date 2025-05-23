import { createApp } from 'vue'
import App from './ContractList.vue'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || 'https://lecxwawwxublqsjaqlsz.supabase.co',
  import.meta.env.VITE_SUPABASE_KE || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlY3h3YXd3eHVibHFzamFxbHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5ODIwNTUsImV4cCI6MjA2MzU1ODA1NX0.jfk608nZE1UMrJk5YaAsI5RnlhxeNteR6SR0m42xX7Y'
)

const app = createApp(App)
app.provide('supabase', supabase)  // 全局注入
app.mount('#app')
