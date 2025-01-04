import { getImageUrl } from "@/lib/utils";

export const CardCircleSection = (props: any) => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    {props.title}
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    {props.description}
                </p>
                </div>
                <div className="mt-4 grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 rounded-lg bg-white p-5">
                    {props.data.map((data: any, index: number) => (
                        <div key={index} className="flex flex-col text-center items-center">
                            <img src={getImageUrl('activity', data.image)} alt={data.name} className="h-20 w-20 object-cover rounded-full" />
                            <p className="pt-1">{data.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}