import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export function fancy() {
  Fancybox.bind('[data-fancybox="single"]', {
    groupAttr: false,
  });
}


