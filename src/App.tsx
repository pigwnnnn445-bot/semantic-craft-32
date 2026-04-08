import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LangContext } from "@/i18n/LangContext";
import { translations, type Lang } from "@/i18n/translations";
import Index from "./pages/Index.tsx";
import VideoDetail from "./pages/VideoDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

function LangWrapper() {
  const { pathname } = useLocation();
  const currentLang: Lang = pathname.startsWith("/zh") ? "zh" : "en";
  const t = translations[currentLang];
  const otherLangPath = currentLang === "en" ? "/zh" : "/";

  return (
    <LangContext.Provider value={{ lang: currentLang, t, otherLangPath }}>
      <Index />
    </LangContext.Provider>
  );
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LangWrapper />} />
            <Route path="/zh" element={<LangWrapper />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
