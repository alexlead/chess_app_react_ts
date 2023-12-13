import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";

export class Knight extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = "knight";
        this.name = FigureName.KNIGHT;
        
      }

      canMoove(target: Cell): boolean {
        if( !super.canMoove(target)) {
          return false;
        }
        

        return true;
    }

}