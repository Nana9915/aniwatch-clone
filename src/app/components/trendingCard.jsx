import Image from "next/image";

export const TrendingCard = (props) => {
    const {ranking, image, title} = props;
    return (
        <article className="flex">
            <div className="self-end flex flex-col items-center justify-center flex-shrink-0 w-10 gap-[15px]">
                <span className="rotate-text font-[500] text-[15px] leading-[40px] text-white-color">{title}</span>
                <span className="text-prime-color font-semibold text-xl">
                    {ranking < 10 && "0"}
                    {ranking}
                </span>
            </div>
            <div className="relative aspect-[166/237] w-[calc(100%-40px)] flex-shrink-0">
                <Image className="absolute top-0 left-0 object-cover w-full h-full " src={image} alt={title} width={166} height={237} />
            </div>
        </article>
    )
}