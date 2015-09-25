'use strict';
var crypto = require('crypto');

function sortQuery(params) {
  return Object.keys(params).filter(function(key) {
    return !!params[key];
  }).sort().map(function(key) {
    return key + '=' + params[key];
  }).join('&');
}

function getObjectSignature(params, options) {
  options.encryptType = options.encryptType || 'md5';

  var query = sortQuery(params);

  if (options.key) {
    query += '&key=' + options.key;
  }

  return crypto.createHash(options.encryptType).update(new Buffer(query, 'utf8')).digest('hex');
}

function getArraySignature(arr, options) {
  options.encryptType = options.encryptType || 'sha1';
  return crypto.createHash(options.encryptType).update(arr.sort().join('')).digest('hex');
}

/**
 * 获取参数签名
 * Examples:
 * ```
 * getSignature(params, options);
 * ```
 * Options:
 * ```
 * {
 *   "key": "partnerKey", //可选，key参数
 *   "encryptType": "md5", //可选，加密类型，md5或sha1
 *   "upperCase": true //可选，签名是否转大写，默认不转换
 * }
 * ```
 *
 * @name getSignature
 * @param {Array|Object} params 待加密数据
 * @param {Object} options 加密选项
 */
module.exports = function getSignature(params, options) {
  var signature;

  options = options || {};
  if (params instanceof Array) {
    signature = getArraySignature(params, options);
  } else if (params instanceof Object) {
    signature = getObjectSignature(params, options);
  }

  return (signature && options.upperCase) ? signature.toUpperCase() : signature;
};
