/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 274.2732732732732,
        y: 227.72672672672672
      })
    ];

    this.sounds = [
      new Sound("Phone Call", "./Stage/sounds/Phone Call.mp3"),
      new Sound("0110", "./Stage/sounds/0110.mp3")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Phone done" },
        this.whenIReceivePhoneDone
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Menu End" },
        this.whenIReceiveMenuEnd
      )
    ];

    this.vars.myVariable = 0;
    this.vars.officeLeft = 1;
    this.vars.officeRight = 0;
    this.vars.monitor = 1;
    this.vars.photosButton = 0;
    this.vars.filesButtom = 0;
    this.vars.importantButtom = 0;
    this.vars.notesButton = 0;
  }

  *whenIReceivePhoneDone() {
    yield* this.wait(1);
    yield* this.playSoundUntilDone("Phone Call");
  }

  *whenGreenFlagClicked() {
    yield* this.startSound(110);
  }

  *whenIReceiveMenuEnd() {
    this.stopAllSounds();
  }
}
