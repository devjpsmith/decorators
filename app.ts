import ComputerWithDedicatedGPU from "./ComputerWithDedicatedGPU";
import ComputerWithPrinterDecorator from "./ComputerWithPrinterDecorator";
import ServerComputer from "./ServerComputer";

let server = new ServerComputer();
let serverWithPrinter = new ComputerWithPrinterDecorator(server);
let serverWithPrinterAndDedicatedGPU = new ComputerWithDedicatedGPU(serverWithPrinter);

serverWithPrinterAndDedicatedGPU.boot();
serverWithPrinterAndDedicatedGPU.display();
serverWithPrinterAndDedicatedGPU.print();
serverWithPrinterAndDedicatedGPU.renderVideo();
serverWithPrinterAndDedicatedGPU.shutDown();