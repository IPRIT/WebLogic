/*
 * WebLogic Project 
 * https://github.com/IPRIT
 *
 * Copyright (c) 2015-2016 "IPRIT" Alex Belov, contributors
 * Licensed under the BSD license.
 * Created on 30.12.2015
 */

import Blocks from '../components/blocks/blocks.js';

export default class Model {

    constructor(modelName, ...restParams) {
        this.name = modelName;
        this.blocks = [];
    }

    addBlock(...blocks) {
        if (!blocks || !blocks.length) {
            return;
        }
        for (let block of blocks) {
            if (!(block instanceof Blocks.BaseBlock)) {
                throw new TypeError('There is no method with this type of parameter');
            }
            if (this.blocks.find(_iter => _iter.guid === block.guid)) {
                throw new RangeError('Block element already exists in this scope');
            }
            this.blocks.push(block);
            Model._emitEvent('blockAdded', block);
        }
    }

    /**
     *
     * Events region
     */
    static _emitEvent(eventName, entity = null) {
        console.log(`Emitted event: ${eventName},`, entity);
    }
}