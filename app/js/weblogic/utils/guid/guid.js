/*
 * WebLogic Project 
 * https://github.com/IPRIT
 *
 * Copyright (c) 2015-2016 "IPRIT" Alex Belov, contributors
 * Licensed under the BSD license.
 * Created on 30.12.2015
 */

export default {
    create: CREATE_GUID
}

function CREATE_GUID() {
    return `${(1000000 * Math.random()).toString(16).replace('.', '')}-`.repeat(4).slice(0, -1);
}