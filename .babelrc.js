module.exports = {
	presets: [['next/babel']],
	// style必须设置为true,
	plugins: [['import', { libraryName: 'antd', style: true }]],
};
