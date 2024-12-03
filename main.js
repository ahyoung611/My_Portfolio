
import { menu } from "./src/js/menu.js";
import { intro } from "./src/js/intro.js";
import { link } from "./src/js/link.js";
import{ project } from "./src/js/project.js"
import{ work } from "./src/js/work.js"
// import{ uxui } from "./src/js/uxui.js"
import{ about } from "./src/js/about.js"
import{ bgColor } from "./src/js/bgColor.js"
// import{ path } from "./src/js/path.js"

window.addEventListener('load',function(){
    menu()
    intro()
    link()
    project()
    work()
    // uxui()
    about()
    bgColor()
    // path()
})
