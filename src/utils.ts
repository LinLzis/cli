import fs from 'fs-extra';
import { AnyObject } from './typings/index';

const deepClone = (obj: AnyObject): AnyObject => {
  return JSON.parse(JSON.stringify(obj));
};

const getType = (obj: AnyObject): string => {
  return Object.prototype.toString.call(obj).slice(8, -1);
};

const isObject = (obj: any) => {
  return getType(obj) === 'Object';
};

const mergeObject = (source: AnyObject, target: AnyObject): AnyObject => {
  Object.entries(source).forEach(([key, val]) => {
    if (isObject(val) && target[key]) {
      target[key] = mergeObject(target[key], val);
    } else {
      target[key] = val;
    }
  });
  return target;
};

const endsWith = (suffix: string, str: any) => {
  if (!str) {
    return false;
  }
  const arr = str.split(suffix);
  return arr.length === 2 && arr[1] === '';
};

/**
 * Determines if a given file path is a YAML file
 */
const isYamlPath = (filePath: string): boolean =>
  endsWith('.yml', filePath) || endsWith('.yaml', filePath);

/**
 * Determines if a given file path is a JSON file
 */
const isJsonPath = (filePath: string): boolean => endsWith('.json', filePath);

/**
 * Checks if a file exists
 */
const fileExists = (filePath: string): boolean => {
  try {
    const stats = fs.lstatSync(filePath);
    return stats.isFile();
  } catch (e) {
    return false;
  }
};

const getFileExt = (filePath: string): string => {
  try {
    const arr = filePath.split('.');
    return arr[arr.length - 1];
  } catch (e) {
    return '';
  }
};

export { deepClone, isYamlPath, isJsonPath, fileExists, getType, mergeObject, getFileExt };