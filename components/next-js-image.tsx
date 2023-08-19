import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function NextJsImage({
    photo,
    imageProps: { alt, title, sizes, className, onClick, style },
    wrapperStyle,
}: RenderPhotoProps) {
    return (
        <div style={{ overflow: "hidden", ...wrapperStyle, position: "relative" }}>
            <Image
                fill
                src={photo}
                placeholder={"blurDataURL" in photo ? "blur" : undefined}
                {...{ alt, title, sizes, className, onClick }}
            />
        </div>
    );
}