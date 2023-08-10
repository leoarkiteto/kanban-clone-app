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
    class="bg-columnBgColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
    <div
      class="bg-mainBgColor text-md h-[60px] cursor-pointer rounded-md rounded-b-none p-3 font-bold border-columnBgColor border-4 items-center justify-between flex">
      <div class="flex gap-2">
        <div
          class="flex justify-center items-center bg-columnBgColor px-2 py-1 rounded-full text-sm">
          0
        </div>
        {{ title }}
      </div>

      <button
        class="text-gray-500 hover:text-white hover:bg-columnBgColor rounded px-1 py-2"
        type="button"
        @click="$emit('deleteColumn', id)">
        <TrashCanOutline />
      </button>
    </div>

    <div class="flex flex-grow">Content</div>

    <footer>Footer</footer>
  </article>
</template>
