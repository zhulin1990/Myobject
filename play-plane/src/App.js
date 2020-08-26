// vue3
import { ref, computed, defineComponent, h } from "@vue/runtime-core";
import xiaoqiu from "./page/xiaoqiu";
import StartPage from './page/GamePage'
// template -> render
export default defineComponent({
  setup() {
    // vue2 data
    // 创建响应式对象 ref
    // const currentPageName = ref("StartPage");
    const currentPageName = ref("xiaoqiu");
    // 计算属性
    // 依赖别的属性的属性
    const currentPage = computed(() => {
      if (currentPageName.value === "xiaoqiu") {
        return xiaoqiu;
      }
      else if (currentPageName.value === "StartPage") {
        return StartPage;
      }
    });

    return {
      currentPage,
      currentPageName
    }
  },
  render(ctx) {
    return h("Container", [
      h(ctx.currentPage, {
        onChangePage(page) {
          ctx.currentPageName = page;
        },
      }),
    ]);
    // return h("Container", [h(GamePage)]);
  },
});
