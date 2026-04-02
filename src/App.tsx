import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import PatientPortal from "./pages/PatientPortal.tsx";
import StaffDashboard from "./pages/StaffDashboard.tsx";
import ModeratorDashboard from "./pages/ModeratorDashboard.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import NotFound from "./pages/NotFound.tsx";
import Presentation from "./presentation/Presentation.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patient" element={<PatientPortal />} />
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/moderator" element={<ModeratorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
