// 飞机逻辑
import {
  toRefs,
  reactive,
  watch,
  ref,
  h,
  defineComponent,
  createRenderer
} from "@vue/runtime-core";
import planeImg from "../../assets/plane.png";
export default defineComponent({
  props: ["x", "y"],
  setup(props) {

    // 响应式丢失问题
    const { x, y } = toRefs(props);
    return {
      x,
      y,
    };
  },

  render(ctx) {
    return h("Container", { x: ctx.x, y: ctx.y }, [
      h("Circle"),
    ]);
  },
});


