<template>
  <div id="AddLink" class="w-full bg-white rounded-3xl overflow-hidden">
    <div class="flex items-center justify-between pb-2 p-6">
      <div class="text-[19px] font-semibolt">Enter URL</div>
      <button
        @click="($event) => $emit('close')"
        class="flex items-center rounded-full p-1.5 hover:bg-[#EFF0EA]"
      >
        <Icon name="mdi:close" size="20" color="#676B5F" />
      </button>
    </div>
  </div>
</template>

<script setup></script>
