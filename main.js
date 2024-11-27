
import { menu } from "./src/js/menu";
import { intro } from "./src/js/intro";
import { project } from "./src/js/project";
import { work } from "./src/js/work";
import { uxui } from "./src/js/uxui";
import { about } from "./src/js/about";
import { bgColor } from "./src/js/bgColor";
// import { cursor } from "./src/js/cursor";
import { cursor } from "./src/js/cursor2";

window.addEventListener('load',function(){
    menu()
    intro()
    project()
    work()
    uxui()
    about()
    bgColor()
    cursor()
})


