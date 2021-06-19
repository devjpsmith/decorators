import Computer from "./Computer";
import ComputerComponentDecorator from "./ComputerComponentDecorator";

export default class ComputerWithDedicatedGPU extends ComputerComponentDecorator {
    constructor(computer: Computer) {
        super(computer);
    }

    renderVideo(): void {
        console.log('rendering video with dedicated GPU');
    }
}
