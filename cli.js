#!/usr/bin/env node
'use strict';
const {spawn} = require('child_process');
const zopflipng = require('.');

const input = process.argv.slice(2);

spawn(zopflipng, input, {stdio: 'inherit'})
	.on('exit', process.exit);
