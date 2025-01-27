import { ref } from "vue";
import { site } from "../../utilities/ts/site";

export const userDataHome = ref<any>(null);

export class homeModulo {
  public static onInit() {
    this.userData();
  }

  public static userData() {
    const data: any = site.getCookies("usuario") || null;
    if (!data) {
      return;
    }
    userDataHome.value = JSON.parse(data);
  }
}
