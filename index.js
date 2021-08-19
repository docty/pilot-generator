#! /usr/bin/env node
const yargs = require('yargs');
const chalk = require('chalk');
const noArgs = require('./utils/no-args')
const withArgs = require('./utils/with-args');

const usage = chalk.green("\n Usage: pilot-generator [command]");
//yargs.usage(usage).options('new').argv;

if(!yargs.argv._.length) return noArgs()

const baseLength = yargs.argv.$0.length; 
const filenameLength = __filename.split('\\').pop().length;
const basePath = yargs.argv.$0.substring(0, baseLength-filenameLength); 

withArgs(yargs.argv._, basePath)





