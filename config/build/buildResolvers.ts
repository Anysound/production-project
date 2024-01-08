import {ResolveOptions} from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        preferAbsolute: true, // свойство, включающее абсолютные пути в компонентах
        modules: [
            options.paths.src, 'node_modules'
        ],
        mainFiles: ['index'], // для каждого модуля index файл будет главным
        alias: {} // для указания пути к модулям напрямую
    }
}
