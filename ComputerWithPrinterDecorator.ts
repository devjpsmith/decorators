import Computer from "./Computer";
import ComputerComponentDecorator from "./ComputerComponentDecorator";

export default class ComputerWithPrinterDecorator extends ComputerComponentDecorator {
    constructor(computer: Computer) {
        super(computer);
    }

    print(): void {
        console.log('printing with printer!');
    }
}
