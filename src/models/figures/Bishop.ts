import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";

export class Bishop extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = "bishop";
    this.name = FigureName.BISHOP;


  }

  canMoove(target: Cell): boolean {
    if (!super.canMoove(target)) {
      return false;
    }


    return true;
  }
}