import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { useLang } from "@/i18n/LangContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ArrowLeft } from "lucide-react";

const EXAMPLE_VIDEO = "https://static.higgsfield.ai/kling-3/hero/hero-1.mp4";

const VideoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useLang();
  const videoIndex = Number(id) || 1;

  return (
    <>
      <Helmet>
        <title>{`Video Example ${videoIndex} — Seedance 2.0`}</title>
      </Helmet>
      <SiteHeader />
      <main className="min-h-screen pt-24 pb-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            to={lang === "zh" ? "/zh" : "/"}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "zh" ? "返回首页" : "Back to Home"}
          </Link>

          <div className="rounded-2xl overflow-hidden glow-border">
            <video
              src={EXAMPLE_VIDEO}
              className="w-full aspect-video object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>

          <div className="mt-8 space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold font-display text-foreground">
              {lang === "zh" ? `示例视频 ${videoIndex}` : `Example Video ${videoIndex}`}
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {lang === "zh"
                ? "使用 Seedance 2.0 生成的 AI 视频示例。您可以基于此风格创建类似的视频。"
                : "AI video example generated with Seedance 2.0. You can create similar videos based on this style."}
            </p>
            <a
              href="https://higgsfield.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-8 py-3 rounded-full bg-[#c8ff00] text-black font-semibold text-sm hover:bg-[#d4ff33] transition-colors"
            >
              {lang === "zh" ? "做同款" : "Make Similar"} →
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default VideoDetail;
