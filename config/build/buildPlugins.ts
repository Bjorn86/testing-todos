import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration, DefinePlugin, ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/types';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const { mode, paths, isAnalyzer, isDev, isProd } = options;

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.svg'),
    }),
    new DefinePlugin({
      __MODE__: JSON.stringify(mode),
      __API_KEY__: JSON.stringify(process.env.API_KEY),
      __AUTH_DOMAIN__: JSON.stringify(process.env.AUTH_DOMAIN),
      __PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID),
      __STORAGE_BUCKET__: JSON.stringify(process.env.STORAGE_BUCKET),
      __MESSAGING_SENDER_ID__: JSON.stringify(process.env.MESSAGING_SENDER_ID),
      __APP_ID__: JSON.stringify(process.env.APP_ID),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(paths.src, 'shared', 'assets', 'icons'),
          to: path.resolve(paths.output, 'assets/icons'),
        },
      ],
    }),
  ];

  if (isDev) {
    plugins.push(
      new ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new ReactRefreshWebpackPlugin(),
    );
  }

  if (isProd) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (isAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
