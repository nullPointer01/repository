<template>
  <div id="BasicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a
          href="https://bcdh.yuque.com/staff-wpxfif/resource/rls4he4gffa1g1ob"
          target="_blank"
        >
          oj系统知识星球
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<style scoped>
#BasicLayout {
}

#BasicLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#BasicLayout .content {
  background: linear-gradient(to right, cornflowerblue, whitesmoke);
  padding: 20px;
  margin-bottom: 16px;
}

/**
position: sticky; 让其在滚动时保持不变
bottom: 0;
left: 0;
right: 0;
*/
#BasicLayout .footer {
  background: cornflowerblue;
  padding: 20px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>

<script>
// import GlobalHeader from "@/components/GlobalHeader.vue";
//
// export default {
//   components: GlobalHeader,
// };
import { defineComponent } from "vue";
import GlobalHeader from "@/components/GlobalHeader.vue";

export default defineComponent({
  components: { GlobalHeader },
});
</script>
