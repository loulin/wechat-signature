# 微信签名工具

### 签名参数对象
```js
'use strict';

var sign = require('wechat-signature');

// 所有参数可选，依具体API设置
var options = {
  key: '888f8e88888b88a8ebafc8e88e88e88f',
  encryptType: 'md5',
  upperCase: true
};

var params = {
  mch_id: '1234567890',
  nonce_str: 'Wc3l4nlxqrhYkcHYsSKXAS14dY9yC7bX',
  mch_billno: '1234567890201509250123456789',
  wxappid: 'wxc88a88d88d8b8c88',
  send_name: 'lodejs.org',
  re_openid: 'o-hVKuNknQQBZFDlbE8eibQzIX8o',
  total_amount: 50000,
  total_num: 3,
  wishing: '恭喜发财',
  act_name: '裂变红包',
  remark: '打赏QQ:5794560',
  amt_type: 'ALL_RAND'
};

var encrypt = sign(params, options);
console.log(encrypt);
```

### 签名数组
```js
'use strict';

var sign = require('wechat-signature');
var params = ['api_ticket', 'card_id', 'timestamp', 'code',  'openid', 'balance'];
var encrypt = sign(params);
console.log(encrypt);
```
