import { Texture } from "@pixi/core";
import { LoaderResource } from "@pixi/loaders";
import { TResources } from "./Preloader";

const textures: { [key: string]: Texture } = {};
let resources: TResources = {};
export function processResources(res: TResources): void {
    resources = { ...resources, ...res };
    Object.keys(res).forEach(key => {
        const resource = res[key];
        if (resource.texture) {
            textures[key] = resource.texture;
        } else if (resource.textures) {
            Object.keys(resource.textures).forEach(textureKey => {
                textures[`${key}_${textureKey}`] = resource.textures[textureKey];
            });
        }
    });
}

export function getResources(key: string): LoaderResource {
    return resources[key];
}

export function getTexture(key: string): Texture {
    if(!textures[key]) {
        throw new Error(`Texture ${key} not found`);
    }
    return textures[key];
}

export function getTextures(key: string): Texture[] {
    const frameKeys = Object.keys(textures).filter(keys => keys.startsWith(key));
    return frameKeys.map(key => textures[key]);
}