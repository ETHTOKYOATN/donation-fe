const CracoAlias = require('craco-alias');
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
// const smp = new SpeedMeasurePlugin();
const CracoEsbuildPlugin = require('craco-esbuild');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new ESBuildMinifyPlugin({
                target: 'es2015', // Syntax to compile to (see options below for possible values)
            }),
        ],
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: { source: 'tsconfig', baseUrl: '.', tsConfigPath: 'tsconfig.paths.json', debug: false },
        },
        {
            plugin: CracoEsbuildPlugin,
            options: {
                esbuildLoaderOptions: {
                    // Optional. Defaults to auto-detect loader.
                    loader: 'tsx', // Set the value to 'tsx' if you use typescript
                    target: 'es2015',
                },
                esbuildMinimizerOptions: {
                    // Optional. Defaults to:
                    target: 'es2015',
                    css: true, // if true, OptimizeCssAssetsWebpackPlugin will also be replaced by esbuild.
                },
                skipEsbuildJest: false, // Optional. Set to true if you want to use babel for jest tests,
                esbuildJestOptions: {
                    loaders: {
                        '.ts': 'ts',
                        '.tsx': 'tsx',
                    },
                },
            },
        },
    ],
};
