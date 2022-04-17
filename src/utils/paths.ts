import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')

// Docs
export const docRoot = resolve(projRoot, 'docs')
export const vpRoot = resolve(docRoot, '.vitepress')


export const projPackage = resolve(projRoot, 'package.json')
