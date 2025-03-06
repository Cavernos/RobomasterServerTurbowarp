
import {RobomasterBasics,LedEffects, Chassis,ExtensionModule, Smart,Armor, Sensor,SensorAdapter, Media} from "./robomaster_extension.js"
// Initialisation
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

