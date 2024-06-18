<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

//全局初始化函数，有全局单次调用的代码，都可以写到这里
const doInit = () => {
  console.log("hello word");
};

onMounted(() => {
  doInit();
});

const router = useRouter();
const store = useStore();
router.beforeEach((to, from, next) => {
  if (
    to.meta?.access === "canAdmin" &&
    store.state.user.loginUser?.userRole !== "admin"
  ) {
    next("/noAuth");
    return;
  }
  next();
});
</script>
