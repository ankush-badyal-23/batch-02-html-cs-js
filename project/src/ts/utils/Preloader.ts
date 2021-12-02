import { LoaderResource, Loader } from "@pixi/loaders"
import { processResources } from "./Texture";
export type TResources ={ [key: string]: LoaderResource };
export type TAssetList = {
    baseUrl: string;
    manifest: {
        key: string;
        url: string;
        type?: string;
        cros?: boolean;
    }[];
}
const loaderDiv = <HTMLDivElement>document.getElementById('loader');
const messageDiv = <HTMLDivElement>document.getElementById('message');
const barDiv = <HTMLDivElement>document.getElementById('bar');
const progressDiv = <HTMLDivElement>document.getElementById("progress");
function showProgress(l: Loader): void {
    console.log('showProgress', l.progress, l);
    if (progressDiv) {
        progressDiv.style.width = `${l.progress}%`;
    }
}

function onLoadCompelete(l: Loader, r: TResources): void {
    console.log('onLoadCompelete', l.progress, l);
    processResources(r);
    setTimeout(() => {
        barDiv.style.display = 'none';
        messageDiv.innerHTML = 'Loading complete.<br>Tap/click to start.';
        loaderDiv.addEventListener('click', () => {
            loaderDiv.style.display = 'none';
            loaderDiv.remove();
        });
    }, 1000);
}

export function load(assets: TAssetList, cb: () => void): void {
    console.log('load', assets);
    if (progressDiv) {
        progressDiv.style.width = `0%`;
    }
    const loader = Loader.shared;
    loader.baseUrl = assets.baseUrl;
    loader.add(assets.manifest);
    loader.onProgress.add(showProgress);
    loader.onComplete.add(onLoadCompelete);
    loader.load(cb);
}