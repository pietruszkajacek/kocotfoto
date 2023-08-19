import fs from 'fs'
import { join } from 'path'
import { promisify } from 'util'
import imagesize from 'image-size'
import type { Photo } from "react-photo-album";

const sizeOf = promisify(imagesize)

export async function getPhotos(url: string, dir: string): Promise<Array<Photo>> {
    const photosDirectory = join(process.cwd(), dir);
    const photos = fs.readdirSync(photosDirectory);

    return (await Promise.all(photos.map(async (photo) => {
        try {
            const dimension = await sizeOf(`${photosDirectory}/${photo}`);
            return { 
                src: `${url}${photo}`, 
                width: dimension.width, 
                height: dimension.height,
            };
        } catch (err) {
            console.log(err);
        }
    })))
}