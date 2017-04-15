var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mock', function(req, res, next) {
	// 使用 Mock
	var Mock = require('mockjs')
	var data = Mock.mock({
	    'name|1-5':'*',
	    'name2|4':'#',
	    'name3|+1':100,
	    'name4|1':true,
	    'name5|1-8':true,
	    name6:'@bololean()',
	    natural:'@natural()'
	})
	// 输出结果
	var ret = JSON.stringify(data, null, 4);
	console.log(ret)
  res.render('index', { title: ret });
});

router.get('/mockjs', function(req, res, next) {
	// 使用 Mock
	var Mock = require('mockjs')
	var data = Mock.mock({
	    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	    'list|1-10': [{
	        // 属性 id 是一个自增数，起始值为 1，每次增 1
	        'id|+1': 1
	    }]
	})
	// 输出结果
	var ret = JSON.stringify(data, null, 4);
	console.log(ret)
  res.send(ret);
});

router.get('/jdapi', function(req, res, next) {
	var cb = req.query.callback;
	console.log(cb);
	// 使用 Mock
	var Mock = require('mockjs')
	var data = Mock.mock({
	   'categories|4-6': [{
	    categoryName: '@cname@cname',
	    'categoryID|+1': 10,
	    logo: '@image(64x64,#eee,Logo)',
	    'categoryItems|1-4': [{
	      cname: '@cname',
	      'cid|+1': 100,
	      'item|3-7': [{
	        name: '@cname',
	        'id|+1': 1000,
	        link: '@url'
	      }]
	    }],
	    'seller|8-15':[{
	    	name:'@cname@cname',
	      url:'@url'
	    }]
	  }]
	})
	// 输出结果
	var ret = JSON.stringify(data, null, 4);
	// console.log(ret)
	ret = cb+'('+ret+')';
  res.send(ret);
});

module.exports = router;
