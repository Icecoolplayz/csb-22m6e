/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Effect extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B64324",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B64324.png",
        { x: 249, y: 249 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B643242",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B643242.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B643243",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B643243.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B643244",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B643244.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B643245",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B643245.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B643246",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B643246.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B643247",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B643247.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B643248",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B643248.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B643249",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B643249.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432410",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432410.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432411",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432411.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432412",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432412.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432413",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432413.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432414",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432414.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432415",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432415.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432416",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432416.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432417",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432417.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432418",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432418.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432419",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432419.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432420",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432420.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432421",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432421.png",
        { x: 249.5, y: 249.5 }
      ),
      new Costume(
        "24CB0A36-3668-4646-96C9-126246B6432422",
        "./Effect/costumes/24CB0A36-3668-4646-96C9-126246B6432422.png",
        { x: 249.5, y: 249.5 }
      )
    ];

    this.sounds = [];

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
    this.moveBehind();
    this.effects.ghost = 80;
    this.visible = true;
    while (true) {
      this.costumeNumber += 1;
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenIReceiveMenuEnd() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
