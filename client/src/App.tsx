import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import DivorceSettlement from "./pages/DivorceSettlement";
import MaintenanceAgreements from "./pages/MaintenanceAgreements";
import ParentingPlans from "./pages/ParentingPlans";
import VoiceOfChild from "./pages/VoiceOfChild";
import AdultDivorcePrep from "./pages/AdultDivorcePrep";
import IllnessDisability from "./pages/IllnessDisability";
import PalliativeCare from "./pages/PalliativeCare";
import HealthEducation from "./pages/HealthEducation";
import AdminDashboard from "./pages/AdminDashboard";
import Contact from "./pages/Contact";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/booking"} component={Booking} />
      <Route path={"/services/divorce-settlement"} component={DivorceSettlement} />
      <Route path={"/services/maintenance-agreements"} component={MaintenanceAgreements} />
      <Route path={"/services/parenting-plans"} component={ParentingPlans} />
      <Route path={"/services/voice-of-child"} component={VoiceOfChild} />
      <Route path={"/services/adult-divorce-preparation"} component={AdultDivorcePrep} />
      <Route path={"/services/illness-disability"} component={IllnessDisability} />
      <Route path={"/services/palliative-care"} component={PalliativeCare} />
      <Route path={"/services/health-education"} component={HealthEducation} />
      <Route path={"/admin/dashboard"} component={AdminDashboard} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
