/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Monitor extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Monitor", "./Monitor/costumes/Monitor.svg", {
        x: 297.297295,
        y: 214.714715
      }),
      new Costume("Monitor2", "./Monitor/costumes/Monitor2.svg", {
        x: 296.5465449999999,
        y: 222.97297500000002
      }),
      new Costume("Monitor3", "./Monitor/costumes/Monitor3.svg", {
        x: 296.5465449999999,
        y: 222.97297500000002
      }),
      new Costume("Button", "./Monitor/costumes/Button.svg", {
        x: 140,
        y: 29.5
      })
    ];

    this.sounds = [new Sound("pop", "./Monitor/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Phone done" },
        this.whenIReceivePhoneDone
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office Left" },
        this.whenIReceiveOfficeLeft
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office Right" },
        this.whenIReceiveOfficeRight
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.moveBehind(1);
    this.visible = false;
  }

  *whenIReceivePhoneDone() {
    this.goto(-9, -151);
    this.costume = "Button";
    this.effects.ghost = 50;
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.goto(0, 0);
    this.effects.ghost = 0;
    this.costume = "Monitor";
    yield* this.wait(0.1);
    this.costume = "Monitor2";
    yield* this.wait(0.1);
    this.costume = "Monitor3";
  }

  *whenIReceiveOfficeLeft() {
    this.effects.ghost = 50;
    this.goto(-9, -151);
    this.costume = "Button";
  }

  *whenIReceiveOfficeRight() {
    this.effects.ghost = 50;
    this.goto(-9, -151);
    this.costume = "Button";
  }
}
