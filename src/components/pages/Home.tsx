import { Hero } from "../layout/Hero";
import { activities, destinations } from "@/Data";
import { CardCircleSection, CardSection } from "@/components/custom";

// import { GetStartedDialog } from "@/GetStarted/GetStartedDialog";
export const Home = () => {
  return (
    <div className="flex w-full flex-col">
        <main>
          <Hero/>
          <CardSection data={destinations} title={"Popular Destinations"} description={"Explore some of our travelers' favorite locations"} button={{}}/>
          <CardCircleSection data={activities} title={"Popular Activities"} description={"Explore some of our travelers' favorite activities"}/>
        </main>
    </div>
  );
}

