
import { menu } from "./src/js/menu.js";
import { header } from "./src/js/header.js";
import { home } from "./src/js/home.js";
import { link } from "./src/js/link.js";
import{ project } from "./src/js/project.js"
import{ work } from "./src/js/work.js"
import{ uxui } from "./src/js/uxui.js"
import{ about } from "./src/js/about.js"
import{ footer } from "./src/js/footer.js"
import{ bgColor } from "./src/js/bgColor.js"
import{ path } from "./src/js/path.js"
import{ vsplide } from "./src/js/vsplide.js"
import{ wsplide } from "./src/js/wsplide.js"
 

window.addEventListener('DOMContentLoaded',function(){
    menu()
    header()
    home()
    link()
    work()
    project()
    uxui()
    about()
    footer()
    bgColor()
    path()
    vsplide()
    wsplide()
   
})
