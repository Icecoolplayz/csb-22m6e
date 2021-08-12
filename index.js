import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Logo from "./Logo/Logo.js";
import MenuText from "./MenuText/MenuText.js";
import Phone from "./Phone/Phone.js";
import Office from "./Office/Office.js";
import LeftButton from "./LeftButton/LeftButton.js";
import RightButton from "./RightButton/RightButton.js";
import Monitor from "./Monitor/Monitor.js";
import Effect from "./Effect/Effect.js";
import Thumbnail from "./Thumbnail/Thumbnail.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Logo: new Logo({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 105.50000000000036,
    visible: true,
    layerOrder: 2
  }),
  MenuText: new MenuText({
    x: 12,
    y: -130,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Phone: new Phone({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Office: new Office({
    x: 1.176470588235297,
    y: 36.47058823529412,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  LeftButton: new LeftButton({
    x: -184.7058823529412,
    y: -17.647058823529413,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  RightButton: new RightButton({
    x: 183.3925301149109,
    y: -14.094352240260593,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Monitor: new Monitor({
    x: -9,
    y: -151,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Effect: new Effect({
    x: -12,
    y: -50,
    direction: 90,
    costumeNumber: 8,
    size: 190,
    visible: true,
    layerOrder: 1
  }),
  Thumbnail: new Thumbnail({
    x: -3.705882352941167,
    y: -2.117647058823522,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
