/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Thumbnail extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "9609669C-C20D-4634-A6BD-620A8530E7AE",
        "./Thumbnail/costumes/9609669C-C20D-4634-A6BD-620A8530E7AE.jpg",
        { x: 476.5, y: 360 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    yield* this.wait(0);
    this.visible = false;
  }
}
