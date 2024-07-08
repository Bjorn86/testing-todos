import { ModuleOptions } from 'webpack';
import { buildBabelLoader } from './babel/buildBabelLoader';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
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

  const babelLoader = buildBabelLoader(options);

  return [imagesAssetLoader, fontsAssetLoader, babelLoader, svgrLoader];
}
