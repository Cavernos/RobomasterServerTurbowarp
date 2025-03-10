// Initialisation
import {RobomasterBasics} from "./tabs/RobomasterBasics";
import {LedEffects} from "./tabs/LedEffects";
import {Chassis} from "./tabs/Chassis.js";
import {ExtensionModule} from "./tabs/ExtensionModule";
import {Smart} from "./tabs/Smart";
import {Armor} from "./tabs/Armor";
import {Sensor} from "./tabs/Sensor";
import {SensorAdapter} from "./tabs/SensorAdapter";
import {Media} from "./tabs/Media";

const extensions = [
    new RobomasterBasics(),
    new LedEffects(),
    new Chassis(),
    new ExtensionModule(),
    new Smart(),
    new Armor(),
    new Sensor(),
    new SensorAdapter(),
    new Media()
  ];

extensions.forEach(extension => Scratch.extensions.register(extension));

