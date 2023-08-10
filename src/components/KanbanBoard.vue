<script lang="ts" setup>
  import { ref } from "vue";
  import { v4 as uuidv4 } from "uuid";
  import PlusCircleOutline from "vue-material-design-icons/PlusCircleOutline.vue";
  import ColumnContainer from "@/components/ColumnContainer.vue";

  type Column = {
    id: string;
    title: string;
  };

  const columns = ref<Column[]>([]);

  function createNewColumn() {
    const columnToAdd: Column = {
      id: uuidv4(),
      title: `Column ${columns.value.length + 1}`,
    };

    columns.value = [...columns.value, columnToAdd];
  }

  function deleteColumnByID(id: string) {
    columns.value = columns.value.filter(col => {
      return col.id !== id;
    });
  }
</script>

<template>
  <div
    class="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
    <div class="m-auto flex gap-4">
      <div class="flex gap-4">
        <ColumnContainer
          v-for="col in columns"
          :id="col.id"
          :key="col.id"
          :title="col.title"
          @delete-column="deleteColumnByID" />
      </div>

      <button
        class="flex h-[60px] w-[350px] min-w-[350px] cursor-pointer gap-2 rounded-lg border-2 border-columnBgColor bg-mainBgColor p-4 ring-rose-500 hover:ring-2"
        type="button"
        @click="createNewColumn">
        <PlusCircleOutline />
        Add Column
      </button>
    </div>
  </div>
</template>

<style scoped></style>
