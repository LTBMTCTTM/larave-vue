const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/app.js', 'public/js')
    .vue()
    .sass('resources/assets/sass/app.scss', 'public/css');
mix.copyDirectory('resources/assets/css', 'public/css');
mix.copyDirectory('resources/assets/dist', 'public/dist');
mix.copyDirectory('resources/assets/fonts', 'public/fonts');
mix.copyDirectory('resources/assets/images', 'public/images');
mix.copyDirectory('resources/assets/mobile-images', 'public/mobile-images');
