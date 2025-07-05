
import Hero from "../components/Hero";
import ProjectOverview from "../components/ProjectOverview";
import InteractiveCards from "../components/InteractiveCards";
import OperationsResearch from "../components/OperationsResearch";
import TimelineTracker from "../components/TimelineTracker";
import FutureVision from "../components/FutureVision";
import ImpactValues from "../components/ImpactValues";
import MeetDesigner from "../components/MeetDesigner";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navigation />
      <Hero />
      <ProjectOverview />
      <InteractiveCards />
      <OperationsResearch />
      <TimelineTracker />
      <FutureVision />
      <ImpactValues />
      <MeetDesigner />
    </div>
  );
};

export default Index;
