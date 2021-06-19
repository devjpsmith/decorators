import Computer from "./Computer";

export default class ServerComputer extends Computer {
    boot(): void {
        console.log('server booting');
    }

    shutDown(): void {
        console.log('server shutting down');
    }

    display(): void {
        console.log('server displaying');
    }

    print(): void {
        console.log('server printing');
    }

    renderVideo(): void {
        console.log('server rendering video');
    }
}
