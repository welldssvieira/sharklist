import { initAOS } from "./modules/aos.js";
import { initHeaderScroll } from "./components/header.js";
import "./modules/getEspecies.js";
import {renderProfile} from "./modules/createProfile.js";

initAOS();
initHeaderScroll();
renderProfile();