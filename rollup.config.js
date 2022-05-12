import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import {terser} from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

import path from "path";
import alias from "@rollup/plugin-alias";

const production = !process.env.ROLLUP_WATCH;

function serve() {
    let server;

    function toExit() {
        if (server) server.kill(0);
    }

    return {
        writeBundle() {
            if (server) return;
            server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            });

            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        }
    };
}

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        svelte({
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !production
            }
        }),
        // we'll extract any component CSS out into
        // a separate file - better for performance
        css({output: 'bundle.css'}),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload('public'),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser(),

        //경로 alias 설정
        alias({
            entries: [
                {
                    find: "~",
                    replacement: path.resolve(__dirname, "src/") //현재 디렉토리
                }, {
                    find: "@header",
                    replacement: path.resolve(__dirname, "src/components/header") //현재 디렉토리
                }, {
                    find: "@main",
                    replacement: path.resolve(__dirname, "src/components/main") //현재 디렉토리
                }, {
                    find: "@nav",
                    replacement: path.resolve(__dirname, "src/components/nav") //현재 디렉토리
                }, {
                    find: "@side",
                    replacement: path.resolve(__dirname, "src/components/main/sidebar") //현재 디렉토리
                }, {
                    find: "@section",
                    replacement: path.resolve(__dirname, "src/components/main/section") //현재 디렉토리
                }, {
                    find: "@footer",
                    replacement: path.resolve(__dirname, "src/components/footer") //현재 디렉토리
                },{
                    find: "@fonts",
                    replacement: path.resolve(__dirname, "public/asset/fonts") //현재 디렉토리
                }


            ]
        })
    ],
    watch: {
        clearScreen: false
    }
};
