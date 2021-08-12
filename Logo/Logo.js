/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Logo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Logo/costumes/costume1.svg", {
        x: 187.0706234403417,
        y: 171.16526033075328
      })
    ];

    this.sounds = [new Sound("pop", "./Logo/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Menu End" },
        this.whenIReceiveMenuEnd
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 0;
    this.goto(0, 0);
    this.size = 110;
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      for (let i = 0; i < 50; i++) {
        this.effects.ghost += 1;
        this.size += -0.1;
        yield;
      }
      yield* this.wait(0.1);
      for (let i = 0; i < 50; i++) {
        this.effects.ghost += -1;
        this.size += 0.1;
        yield;
      }
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenIReceiveMenuEnd() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
