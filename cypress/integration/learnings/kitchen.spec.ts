// kitchen_sink_spec.js

import { QueryingKsc } from "../../kitchensinkcommands_learning/Querying";
import { TraversalKsc } from "../../kitchensinkcommands_learning/Traversal";


describe('Kitchen Sink Test', () => {
    const queryingKsc = new QueryingKsc();
    const traversalKsc = new TraversalKsc();
    beforeEach(() => {
        queryingKsc.visitUrl("https://example.cypress.io/commands/traversal");
    })
    it('should perform querying commands', () => {
        queryingKsc.getCommand();
        queryingKsc.containsCommand();
        queryingKsc.withinCommand();
    });
    it.only('should perform traversal command', () => {
        traversalKsc.childrenCommand();
        traversalKsc.closestCommand()
        traversalKsc.eqCommand()
        traversalKsc.filterCommand()
        traversalKsc.findCommand()
        traversalKsc.firstCommand()
        traversalKsc.lastCommand()
        traversalKsc.nextAllCommand()
        traversalKsc.nextUntilCommand()
    })
});
