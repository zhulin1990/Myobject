// 开始页面
import { h, defineComponent, reactive, onMounted } from "@vue/runtime-core";
import startPageImg from "../../assets/map.jpg";
import startBtn from "../../assets/startBtn.png";
import Plane from "../components/Plane";
import { game } from "../Game";
let A = 0;
export default defineComponent({
    setup(props, ctx) {
        // ctx.emit
        let { planeInfo, moveEnemyPlanes } = useCreatePlane();
        const handleClick = () => {
            planeInfo.x = 225;
            planeInfo.y = 800;
            game.ticker.add(moveEnemyPlanes, 1);
        };
        return {
            handleClick,
            planeInfo
        };
    },
    render(ctx) {
        return h("Container", [
            h("Sprite", { texture: startPageImg, }),
            h("Sprite", {
                texture: startBtn,
                x: 115,
                y: 710,
                interactive: true,
                onClick: ctx.handleClick
            }),
            h(Plane, { x: ctx.planeInfo.x, y: ctx.planeInfo.y }),
        ])
    },
});
function useCreatePlane() {
    const planeInfo = reactive({ x: 0, y: -20, width: 10, height: 10 });
    const moveEnemyPlanes = () => {
        let hit = hitTestObject(planeInfo)
        A = hit
        let xN = parseInt(Math.random() * 30)
        let yN = parseInt(Math.random() * 40)
        switch (hit) {
            case 1:// 右侧
                planeInfo.x -= xN;
                planeInfo.y -= yN;
                break;
            case 2:// 左侧
                planeInfo.x += xN;
                planeInfo.y += yN;
                break;
            case 3:// 上侧
                planeInfo.x -= xN;
                planeInfo.y += yN;
                break;
            case 4:
                planeInfo.x += xN;
                planeInfo.y -= yN;
                break;
        }
    };
    return {
        planeInfo,
        moveEnemyPlanes
    };
}
function hitTestObject(objA) {
    // 小球右侧碰到右边
    if (objA.x + objA.width >= 550) {
        return 1
    } else if (objA.x - objA.width <= 0) {
        // 小球左侧侧碰到做边
        return 2
    } else if (objA.y - objA.height <= 0) {
        // 小球上边碰到上边
        return 3
    } else if (objA.y + objA.height >= 800) {
        // 小球下边碰到下边
        return 4
    }
    else {
        return A
    }
}