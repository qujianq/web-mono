<script lang="ts" setup>
import { useI18n as useMyI18n } from '@/composables/useI18n'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { setLocal, $t: $myt } = useMyI18n()

const { locale, t } = useI18n()
const whatsyouname = computed(() => {
  return t('intro.whats-your-name')
})
</script>

<template>
  <div>-------使用自定义 i18n-----------</div>
  <nav mt-10 flex justify-center gap-2>
    <button h-10 btn @click="setLocal('zh')">
      中文
    </button>
    <button h-10 btn @click="setLocal('en')">
      English
    </button>
  </nav>
  <h1>{{ $myt.welcome }} </h1>

  <div>-------使用 Vue i18n-----------</div>
  <div>
    <h1>{{ $t('intro') }}</h1>
    <div class="m-auto">
      <select v-model="$i18n.locale" class="h-10 w-20 text-2xl">
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>
    </div>
  </div>
</template>
