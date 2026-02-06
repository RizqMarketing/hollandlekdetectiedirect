import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const DaklekkageOpsporing = lazy(() => import("./pages/diensten/DaklekkageOpsporing"));
const WaterlekkageOpsporing = lazy(() => import("./pages/diensten/WaterlekkageOpsporing"));
const Thermografie = lazy(() => import("./pages/diensten/Thermografie"));
const EndoscopieInspectie = lazy(() => import("./pages/diensten/EndoscopieInspectie"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-ocean-medium border-t-transparent rounded-full animate-spin" /></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/diensten/daklekkage-opsporing" element={<DaklekkageOpsporing />} />
            <Route path="/diensten/waterlekkage-opsporing" element={<WaterlekkageOpsporing />} />
            <Route path="/diensten/thermografie" element={<Thermografie />} />
            <Route path="/diensten/endoscopie-inspectie" element={<EndoscopieInspectie />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
