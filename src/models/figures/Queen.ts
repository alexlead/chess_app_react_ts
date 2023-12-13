import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";

export class Queen extends Figure {


    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = "queen";
        this.name = FigureName.QUEEN;
      }


      canMoove(target: Cell): boolean {
        if( !super.canMoove(target)) {
          return false;
        }
        if(this.cell.isEmptyVertical(target)){
          return true;
        }

        return false;
    }


}