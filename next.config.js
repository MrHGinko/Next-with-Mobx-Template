const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
	// 修改antd的主题色
	modifyVars: { '@primary-color': '#1DA57A' },
	// optional https://github.com/webpack-contrib/css-loader#object
	// cssLoaderOptions: {},

});
