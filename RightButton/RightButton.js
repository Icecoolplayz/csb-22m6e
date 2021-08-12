/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RightButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./RightButton/costumes/costume1.svg", {
        x: 45.5,
        y: 105.5
      })
    ];

    this.sounds = [new Sound("pop", "./RightButton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Phone done" },
        this.whenIReceivePhoneDone
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.effects.ghost = 30;
    this.visible = false;
  }

  *whenIReceivePhoneDone() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Office Right");
  }
}
