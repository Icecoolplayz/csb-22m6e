/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Office extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Monitor", "./Office/costumes/Monitor.svg", {
        x: 297.297295,
        y: 214.714715
      }),
      new Costume("Left", "./Office/costumes/Left.svg", {
        x: 292.0420412912913,
        y: 197.9804804804805
      }),
      new Costume("Right", "./Office/costumes/Right.svg", {
        x: 292.0420412912913,
        y: 197.9804804804805
      })
    ];

    this.sounds = [new Sound("pop", "./Office/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Phone done" },
        this.whenIReceivePhoneDone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office Left" },
        this.whenIReceiveOfficeLeft
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office Right" },
        this.whenIReceiveOfficeRight
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceivePhoneDone() {
    this.costume = "Monitor";
    this.visible = true;
  }

  *whenIReceiveOfficeLeft() {
    if (this.costume.name == "Right") {
      this.costume = "Monitor";
    }
    if (this.costume.name == "Monitor") {
      this.costume = "Left";
    }
    if (this.costume.name == "Left") {
      this.costume = "Left";
    }
  }

  *whenIReceiveOfficeRight() {
    if (this.costume.name == "Monitor") {
      this.costume = "Right";
    }
    if (this.costume.name == "Left") {
      this.costume = "Monitor";
    }
    if (this.costume.name == "Right") {
      this.costume = "Right";
    }
  }

  *whenGreenFlagClicked2() {
    if (this.costume.name == "Monitor") {
      this.stage.vars.monitor = 1;
    }
    if (
      this.costume.name ==
      (this.costume.name == "Right" || this.costume.name == "Left")
    ) {
      this.stage.vars.monitor = 0;
    }
  }
}
