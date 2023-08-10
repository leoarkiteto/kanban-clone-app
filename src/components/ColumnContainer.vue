<script lang="ts" setup>
  import TrashCanOutline from "vue-material-design-icons/TrashCanOutline.vue";

  type Column = {
    id: string;
    title: string;
  };

  defineProps<Column>();
  defineEmits(["deleteColumn", "click"]);
</script>

<template>
  <article
    class="flex h-[500px] max-h-[500px] w-[350px] flex-col rounded-md bg-columnBgColor">
    <div
      class="text-md flex h-[60px] cursor-pointer items-center justify-between rounded-md rounded-b-none border-4 border-columnBgColor bg-mainBgColor p-3 font-bold">
      <div class="flex gap-2">
        <div
          class="flex items-center justify-center rounded-full bg-columnBgColor px-2 py-1 text-sm">
          0
        </div>
        {{ title }}
      </div>

      <button
        class="rounded px-1 py-2 text-gray-500 hover:bg-columnBgColor hover:text-white"
        type="button"
        @click="$emit('deleteColumn', id)">
        <TrashCanOutline />
      </button>
    </div>

    <div class="flex flex-grow">Content</div>

    <footer>Footer</footer>
  </article>
</template>
