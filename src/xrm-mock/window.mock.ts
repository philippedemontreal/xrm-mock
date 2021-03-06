import { ContextMock } from "./globalcontext/context.mock";
import { XrmStaticMock } from "./xrmstatic.mock";

export class WindowMock {
    public Xrm: XrmStaticMock;

    constructor(xrm: XrmStaticMock) {
        this.Xrm = xrm;
    }

    public GetGlobalContext(): Xrm.GlobalContext {
        throw new Error("not implemented");
    }
}
