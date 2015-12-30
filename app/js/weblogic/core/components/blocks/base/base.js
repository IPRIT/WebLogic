import GUID from '../../../../utils/guid/guid.js';

export default class BaseBlock {

    constructor() {
        this.BLOCK_TYPE = 'ABSTRACT';
        this.NUMBER_OF_INPUTS = 1;
        this.NUMBER_OF_OUTPUTS = 1;
        this.BLOCK_CONTEXT = null;
        this.GUID = GUID.create();

        this.INPUT_CHANNELS = [];
        this.OUTPUT_CHANNELS = [];
    }

    get type() {
        return this.BLOCK_TYPE;
    }

    get numberOfInputs() {
        return this.NUMBER_OF_INPUTS;
    }

    get numberOfOutputs() {
        return this.NUMBER_OF_OUTPUTS;
    }

    get context() {
        return this.BLOCK_CONTEXT;
    }

    get guid() {
        return this.GUID;
    }

    connect(otherBlock, outputIndex = 0, inputIndex = 0) {
        otherBlock._setInputBlock(this, inputIndex);
        this.OUTPUT_CHANNELS[`output_${outputIndex}`] = otherBlock;
    }

    _setInputBlock(inputBlock, inputIndex) {
        if (typeof this.INPUT_CHANNELS[`input_${inputIndex}`] !== 'undefined') {
            throw new RangeError('This block is already connected the target block');
        } else if (this.INPUT_CHANNELS.length >= this.NUMBER_OF_INPUTS) {
            throw new RangeError('Input channels limit exceeded');
        }
        this.INPUT_CHANNELS[`input_${inputIndex}`] = inputBlock;
    }
}