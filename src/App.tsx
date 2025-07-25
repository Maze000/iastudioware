import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/Privacy";
import TermsOfService from "./pages/Terms";
import Support from "./pages/Support";
import BasicPlanPayment from "./pages/BasicPlanPayment";
import IntermediatePlanPayment from "./pages/IntermediatePlanPayment";
import AdvancedPlanPayment from "./pages/AdvancedPlanPayment";
import MonthlyPlanPayment from "./pages/MonthlyPlanPayment";
import Game from "./pages/Game";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/game" element={<Game />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/support" element={<Support />} />
          <Route path="/basic-plan-payment" element={<BasicPlanPayment />} />
          <Route path="/intermediate-plan-payment" element={<IntermediatePlanPayment />} />
          <Route path="/advanced-plan-payment" element={<AdvancedPlanPayment />} />
          <Route path="/monthly-plan-payment" element={<MonthlyPlanPayment />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
