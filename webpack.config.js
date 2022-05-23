const path = require('path'); //подключаем path к конфигу вебпака (точка выхода)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/pages/index.js' }, //певрое место, куда заглянет вебпак
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
      publicPath: ''
  },
  	mode: 'development', //добавили режим разработчика
  	devServer: {
			static: path.resolve(__dirname, './dist'), //путь, куда "смотрит" режим разработчика
			compress: true, // это ускорит загрузку в режиме разработки
			port: 8080, // порт, чтобы открывать сайт по адресу локалхост 8080
		
			open: true // сайт будет открываться сам при запуске скрипта npm run dev
  },
	module: {
		rules: [ // rules - это массив правил,добавим регулярное выражение, которое ищет все js файлы
		{
			test: /\.js$/, // при обработка js нужно использовать babel-loader
			use: 'babel-loader',
			// исключение папки node modules, в ней не нужно обрабатывать файлы
			exclude: '/node_modules/'
		},
		{
			test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
			type: 'asset/resource'
		},
		{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, {
				loader: 'css-loader',
				options: { importLoaders: 1	}
			},
			'postcss-loader']
		},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html' //путь к файлу для подключения плагина html 
		}),
		new CleanWebpackPlugin(), // настраивать не нужно, достаточно вызвать
		new MiniCssExtractPlugin()
	]
};
