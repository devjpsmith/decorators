import Computer from "./Computer";

export default class ComputerComponentDecorator extends Computer {
    constructor(private _computer: Computer) {
        super();
    }

    boot(): void {
        this._computer.boot();
    }

    shutDown(): void {
        this._computer.shutDown();
    }

    display(): void {
        this._computer.display();
    }

    print(): void {
        this._computer.print();
    }

    renderVideo(): void {
        this._computer.renderVideo();
    }
}
