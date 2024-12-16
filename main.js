
import { menu } from "./src/js/menu.js";
import { header } from "./src/js/header.js";
import { home } from "./src/js/home.js";
import{ project } from "./src/js/project.js"
import{ work } from "./src/js/work.js"
import{ graphic } from "./src/js/graphic.js"
import{ about } from "./src/js/about.js"
import{ footer } from "./src/js/footer.js"
import{ bgColor } from "./src/js/bgColor.js"
import{ path } from "./src/js/path.js"
 

window.addEventListener('DOMContentLoaded',function(){
    menu()
    header()
    home()
    work()
    project()
    graphic()
    about()
    bgColor()
    path()
    footer()
   
})
