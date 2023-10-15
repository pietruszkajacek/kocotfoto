import fs from 'fs'
import { join } from 'path'
import { promisify } from 'util'
import imagesize from 'image-size'
//import type { Photo } from "react-photo-album";
import type Photo from "@/interfaces/photo";

const sizeOf = promisify(imagesize)

// type Photo = {
//     src: string;
//     width: number;
//     height: number;
// }

export async function getPhotos(url: string, dir: string) {
    const photosDirectory = join(process.cwd(), dir);
    const files = fs.readdirSync(photosDirectory);

    const photos = files.filter((filename) => (/\.(gif|jpe?g|png|webp|bmp)$/i).test(filename));

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
        photosWH.filter((photoWH): photoWH is Photo => {
            return photoWH !== undefined;
        })
    )
}
