import {build} from 'esbuild';
await build({entryPoints:['glass-react.jsx'],bundle:true,minify:true,format:'iife',jsx:'automatic',define:{'process.env.NODE_ENV':JSON.stringify('production')},outfile:'vendor/glass-react.bundle.js',logLevel:'info'});
