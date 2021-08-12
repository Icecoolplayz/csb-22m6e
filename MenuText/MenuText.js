/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MenuText extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./MenuText/costumes/costume1.svg", {
        x: 155.25,
        y: 19.48124999999999
      })
    ];

    this.sounds = [new Sound("pop", "./MenuText/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(12, -130);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Menu End");
    this.visible = false;
  }

  *whenKeySpacePressed() {
    this.broadcast("Menu End");
    this.visible = false;
  }
}
