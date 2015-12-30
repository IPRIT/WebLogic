import Blocks from './weblogic/core/components/blocks/blocks.js';
import Model from './weblogic/core/model/model.js';

export function run() {
    var baseBlock = new Blocks.BaseBlock();
    var model1 = new Model("Untitled1");

    model1.addBlock(baseBlock);
}