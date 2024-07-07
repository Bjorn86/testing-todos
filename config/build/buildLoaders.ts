import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { buildBabelLoader } from './babel/buildBabelLoader';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const { isDev } = options;

  const imagesAssetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/images/[name].[hash][ext]',
    },
  };

  const fontsAssetLoader = {
    test: /\.(woff(2)?|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/fonts/[name].[hash][ext]',
    },
  };

  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      },
    ],
  };

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
      importLoaders: 2,
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          additionalData: `
            @import "app/styles/variables.scss";
            @import "app/styles/mixins.scss";
          `,
        },
      },
    ],
  };

  const babelLoader = buildBabelLoader(options);

  return [imagesAssetLoader, fontsAssetLoader, scssLoader, babelLoader, svgrLoader];
}
