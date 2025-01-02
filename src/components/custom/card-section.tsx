import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"

export const CardSection = (props: any) => {
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
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {props.data.map((data: any, index: number) => (
                    <Card key={index} className="flex flex-col">
                        <img src={data.image} alt={data.name} className="h-48 w-full object-cover" />
                        <CardHeader>
                            <CardTitle>{data.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p>{data.description}</p>
                        </CardContent>
                        <CardFooter>
                            {
                               props.button?.sec &&  <Button className="w-full mr-5 text-green-600">{props.button.sec.name}</Button>
                            }
                            {
                               props.button?.primary &&  <Button className="w-full">{props.button.primary.name}</Button>
                            }
                        </CardFooter>
                    </Card>
                ))}
                </div>
            </div>
        </section>
    )
}