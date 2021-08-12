/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Phone extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Phone/costumes/costume1.svg", {
        x: 305.01604,
        y: 275.372075
      })
    ];

    this.sounds = [new Sound("pop", "./Phone/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Menu End" },
        this.whenIReceiveMenuEnd
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.effects.ghost = 100;
    this.goto(0, 0);
    this.size = 100;
  }

  *whenIReceiveMenuEnd() {
    this.visible = true;
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += -1;
      yield;
    }
    yield* this.wait(3);
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += 1;
      yield;
    }
    this.broadcast("Phone done");
    this.visible = false;
  }
}
