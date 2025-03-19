
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VotingRecord from "./pages/VotingRecord";
import MediaReleasesPage from "./pages/MediaReleasesPage";
import Events from "./pages/Events";
import Updates from "./pages/Updates";
import Contact from "./pages/Contact";
import Subscribe from "./pages/Subscribe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/voting-record" element={<VotingRecord />} />
          <Route path="/media-releases" element={<MediaReleasesPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
