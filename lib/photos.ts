import fs from 'fs'
import { join } from 'path'
import { promisify } from 'util'
import imagesize from 'image-size'
import type { Photo } from "react-photo-album";

const sizeOf = promisify(imagesize)

export async function getPhotos(url: string, dir: string) {
    const photosDirectory = join(process.cwd(), dir);
    const files = fs.readdirSync(photosDirectory);

    // TODO: RegExp filter files by image extension (jpg|webp|png... etc.)
    const photos = files;

    const photosWH = (await Promise.all(photos.map(async (photo) => {
        try {
            const dimension = await sizeOf(`${photosDirectory}/${photo}`);
            if (typeof dimension !== "undefined") {
                return {
                    src: `${url}${photo}`,
                    width: dimension.width ?? 0,
                    height: dimension.height ?? 0,
                };
            } 
        } catch (err) {
            console.log(err);
        }
    })))

    return (
        photosWH.filter((photoWH) => {
            return (typeof photoWH !== "undefined") ? true : false
        })
        
    ) as Photo[]
}
