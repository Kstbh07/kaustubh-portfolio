import { useEffect, useState, useRef, useCallback } from "react";
import { MdRefresh } from "react-icons/md";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { profile } from "../data/portfolio";
import "./styles/PortfolioSections.css";

type LeetCodeStats = {
  totalSolved: number | null;
  easySolved: number | null;
  mediumSolved: number | null;
  hardSolved: number | null;
  ranking: number | null;
  contestRating: number | null;
  totalEasy: number | null;
  totalMedium: number | null;
  totalHard: number | null;
};

type CodeforcesStats = {
  rating: number | null;
  maxRating: number | null;
  rank: string | null;
  solved: number | null;
};

type ContestEntry = { date: number; rating: number };

type StatsState = {
  leetcode: LeetCodeStats;
  codeforces: CodeforcesStats;
  lcContests: ContestEntry[];
  cfContests: ContestEntry[];
};

const emptyStats = (): StatsState => ({
  leetcode: {
    totalSolved: null, easySolved: null, mediumSolved: null, hardSolved: null,
    ranking: null, contestRating: null, totalEasy: null, totalMedium: null, totalHard: null,
  },
  codeforces: { rating: null, maxRating: null, rank: null, solved: null },
  lcContests: [],
  cfContests: [],
});

const fmt = (v: number | string | null) => {
  if (v === null || v === "") return "--";
  return typeof v === "number" ? v.toLocaleString("en-IN") : v;
};

const fetchJson = async <T,>(url: string): Promise<T> => {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status}`);
  return (await r.json()) as T;
};

const drawChart = (
  canvas: HTMLCanvasElement,
  data: ContestEntry[],
  lineColor: string,
  label: string,
  now: number | null,
  peak: number | null,
  emptyText: string,
) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const W = rect.width, H = rect.height;
  ctx.clearRect(0, 0, W, H);
  const pad = { top: 30, right: 20, bottom: 35, left: 45 };
  const cW = W - pad.left - pad.right, cH = H - pad.top - pad.bottom;

  ctx.fillStyle = "#9ca3af"; ctx.font = "12px Geist, sans-serif"; ctx.textAlign = "left";
  ctx.fillText(label, pad.left, 18);

  if (data.length === 0) {
    ctx.strokeStyle = "rgba(255,255,255,0.07)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (cH / 4) * i;
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(W - pad.right, y); ctx.stroke();
    }
    ctx.fillStyle = "#6b7280"; ctx.font = "13px Geist, sans-serif"; ctx.textAlign = "center";
    ctx.fillText(emptyText, W / 2, pad.top + cH / 2);
    return;
  }

  const ratings = data.map(d => d.rating);
  const minR = Math.min(...ratings) - 50;
  const maxR = Math.max(...ratings) + 50;
  const minT = data.length === 1 ? data[0].date - 604800 : data[0].date;
  const maxT = data.length === 1 ? data[0].date + 604800 : data[data.length - 1].date;

  const toX = (t: number) => pad.left + ((t - minT) / (maxT - minT)) * cW;
  const toY = (r: number) => pad.top + (1 - (r - minR) / (maxR - minR)) * cH;

  // Grid
  ctx.strokeStyle = "rgba(255,255,255,0.06)";
  ctx.lineWidth = 1;
  const steps = 5;
  for (let i = 0; i <= steps; i++) {
    const y = pad.top + (cH / steps) * i;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(W - pad.right, y); ctx.stroke();
    const val = Math.round(maxR - ((maxR - minR) / steps) * i);
    ctx.fillStyle = "#6b7280"; ctx.font = "11px Geist, sans-serif"; ctx.textAlign = "right";
    ctx.fillText(String(val), pad.left - 8, y + 4);
  }

  // X-axis labels
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const shownMonths = new Set<string>();
  data.forEach(d => {
    const dt = new Date(d.date * 1000);
    const key = `${dt.getFullYear()}-${dt.getMonth()}`;
    if (!shownMonths.has(key)) {
      shownMonths.add(key);
      const x = toX(d.date);
      ctx.fillStyle = "#6b7280"; ctx.font = "11px Geist, sans-serif"; ctx.textAlign = "center";
      ctx.fillText(`${months[dt.getMonth()]} ${String(dt.getFullYear()).slice(2)}`, x, H - 8);
    }
  });

  // Area fill
  ctx.beginPath();
  ctx.moveTo(toX(data[0].date), toY(data[0].rating));
  data.forEach(d => ctx.lineTo(toX(d.date), toY(d.rating)));
  ctx.lineTo(toX(data[data.length - 1].date), pad.top + cH);
  ctx.lineTo(toX(data[0].date), pad.top + cH);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + cH);
  grad.addColorStop(0, lineColor + "30");
  grad.addColorStop(1, lineColor + "05");
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(toX(data[0].date), toY(data[0].rating));
  data.forEach(d => ctx.lineTo(toX(d.date), toY(d.rating)));
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 2;
  ctx.stroke();

  data.forEach(d => {
    ctx.beginPath();
    ctx.fillStyle = lineColor;
    ctx.arc(toX(d.date), toY(d.rating), data.length === 1 ? 4 : 2.5, 0, Math.PI * 2);
    ctx.fill();
  });

  // Label
  if (now !== null) {
    ctx.fillStyle = "#fff"; ctx.font = "bold 13px Geist, sans-serif";
    ctx.fillText(`now: ${now}`, pad.left + ctx.measureText(label + "  ").width + 10, 18);
  }
  if (peak !== null) {
    const nowText = now !== null ? `now: ${now}` : "";
    const offset = pad.left + ctx.measureText(label + "  " + nowText + "   ").width + 20;
    ctx.fillStyle = "#6b7280"; ctx.font = "12px Geist, sans-serif";
    ctx.fillText(`peak: ${peak}`, offset, 18);
  }
};

const CodingStats = () => {
  const [stats, setStats] = useState<StatsState>(() => emptyStats());
  const [isLoading, setIsLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);
  const lcChartRef = useRef<HTMLCanvasElement>(null);
  const cfChartRef = useRef<HTMLCanvasElement>(null);

  const renderCharts = useCallback(() => {
    if (lcChartRef.current) {
      drawChart(lcChartRef.current, stats.lcContests, "#f59e0b", "CONTEST RATING",
        stats.leetcode.contestRating, stats.lcContests.length > 0 ? Math.max(...stats.lcContests.map(c => c.rating)) : null,
        "No LeetCode contest history yet");
    }
    if (cfChartRef.current) {
      drawChart(cfChartRef.current, stats.cfContests, "#22c55e", "RATING HISTORY",
        stats.codeforces.rating, stats.codeforces.maxRating,
        "No rated Codeforces contests yet");
    }
  }, [stats]);

  useEffect(() => {
    renderCharts();
    window.addEventListener("resize", renderCharts);
    return () => window.removeEventListener("resize", renderCharts);
  }, [renderCharts]);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setIsLoading(true);
      const next = emptyStats();
      const [lcProfile, lcSolved, lcContest, cfUser, cfRating, cfSub] = await Promise.allSettled([
        fetchJson<any>(`https://alfa-leetcode-api.onrender.com/userProfile/${profile.leethandle}`),
        fetchJson<any>(`https://alfa-leetcode-api.onrender.com/${profile.leethandle}/solved`),
        fetchJson<any>(`https://alfa-leetcode-api.onrender.com/${profile.leethandle}/contest`),
        fetchJson<any>(`https://codeforces.com/api/user.info?handles=${profile.handle}`),
        fetchJson<any>(`https://codeforces.com/api/user.rating?handle=${profile.handle}`),
        fetchJson<any>(`https://codeforces.com/api/user.status?handle=${profile.handle}`),
      ]);

      if (lcProfile.status === "fulfilled") {
        const d = lcProfile.value;
        next.leetcode.totalSolved = d.totalSolved ?? null;
        next.leetcode.easySolved = d.easySolved ?? null;
        next.leetcode.mediumSolved = d.mediumSolved ?? null;
        next.leetcode.hardSolved = d.hardSolved ?? null;
        next.leetcode.ranking = d.ranking ?? null;
        next.leetcode.totalEasy = d.totalEasy ?? null;
        next.leetcode.totalMedium = d.totalMedium ?? null;
        next.leetcode.totalHard = d.totalHard ?? null;
      }

      if (lcSolved.status === "fulfilled") {
        const d = lcSolved.value;
        next.leetcode.totalSolved = d.solvedProblem ?? next.leetcode.totalSolved;
        next.leetcode.easySolved = d.easySolved ?? next.leetcode.easySolved;
        next.leetcode.mediumSolved = d.mediumSolved ?? next.leetcode.mediumSolved;
        next.leetcode.hardSolved = d.hardSolved ?? next.leetcode.hardSolved;
        next.leetcode.ranking = d.ranking ?? next.leetcode.ranking;
        next.leetcode.totalEasy = d.totalEasy ?? next.leetcode.totalEasy ?? 953;
        next.leetcode.totalMedium = d.totalMedium ?? next.leetcode.totalMedium ?? 2081;
        next.leetcode.totalHard = d.totalHard ?? next.leetcode.totalHard ?? 951;
      }

      if (lcContest.status === "fulfilled") {
        const d = lcContest.value;
        if (d.contestParticipation && Array.isArray(d.contestParticipation)) {
          next.lcContests = d.contestParticipation.map((c: any) => ({
            date: c.contest?.startTime ?? 0,
            rating: Math.round(c.rating ?? 0),
          })).filter((c: ContestEntry) => c.date > 0).sort((a: ContestEntry, b: ContestEntry) => a.date - b.date);
        }
        const latestContest = next.lcContests[next.lcContests.length - 1];
        next.leetcode.contestRating = d.contestRating
          ? Math.round(d.contestRating)
          : latestContest?.rating ?? null;
      }

      if (cfUser.status === "fulfilled" && cfUser.value.status === "OK") {
        const u = cfUser.value.result?.[0];
        next.codeforces.rating = u?.rating ?? null;
        next.codeforces.maxRating = u?.maxRating ?? null;
        next.codeforces.rank = u?.rank ?? "unrated";
      }

      if (cfRating.status === "fulfilled" && cfRating.value.status === "OK") {
        next.cfContests = (cfRating.value.result || []).map((c: any) => ({
          date: c.ratingUpdateTimeSeconds ?? 0,
          rating: c.newRating ?? 0,
        })).filter((c: ContestEntry) => c.date > 0).sort((a: ContestEntry, b: ContestEntry) => a.date - b.date);
      }

      if (cfSub.status === "fulfilled" && cfSub.value.status === "OK") {
        const accepted = new Set<string>();
        (cfSub.value.result || []).forEach((s: any) => {
          if (s.verdict === "OK" && s.problem) {
            accepted.add(`${s.problem.contestId}-${s.problem.index}`);
          }
        });
        next.codeforces.solved = accepted.size;
      }

      if (!cancelled) {
        setStats(next);
        setIsLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [refreshKey]);

  const lc = stats.leetcode;
  const cf = stats.codeforces;

  return (
    <section className="stats-section section-container" id="coding-stats">
      <div className="portfolio-section-heading">
        <span>Live Data</span>
        <h2>Live <strong>Coding Stats</strong></h2>
        <p>Pulled live from LeetCode and Codeforces - real numbers, not claims.</p>
        <button type="button" className="stats-refresh" onClick={() => setRefreshKey(v => v + 1)} data-cursor="disable">
          <MdRefresh /> {isLoading ? "Refreshing" : "Refresh"}
        </button>
      </div>

      <div className="stats-grid">
        {/* LeetCode */}
        <article className="stats-card">
          <div className="stats-card-title">
            <SiLeetcode />
            <h3>LeetCode</h3>
            <a href={profile.leetcode} target="_blank" rel="noreferrer">#{fmt(lc.ranking)}</a>
          </div>
          <div className="stats-hero-row">
            <div className="stats-hero">
              <strong>{fmt(lc.totalSolved)}</strong>
              <span>solved</span>
            </div>
          </div>
          <div className="difficulty-bars">
            <div className="difficulty-bar-row">
              <span className="diff-label">Easy</span>
              <div className="diff-progress">
                <div className="diff-progress-fill diff-easy" style={{ width: `${((lc.easySolved ?? 0) / (lc.totalEasy ?? 953)) * 100}%` }}></div>
              </div>
              <span className="diff-count"><b>{fmt(lc.easySolved)}</b> / {fmt(lc.totalEasy)}</span>
            </div>
            <div className="difficulty-bar-row">
              <span className="diff-label">Medium</span>
              <div className="diff-progress">
                <div className="diff-progress-fill diff-medium" style={{ width: `${((lc.mediumSolved ?? 0) / (lc.totalMedium ?? 2081)) * 100}%` }}></div>
              </div>
              <span className="diff-count"><b>{fmt(lc.mediumSolved)}</b> / {fmt(lc.totalMedium)}</span>
            </div>
            <div className="difficulty-bar-row">
              <span className="diff-label">Hard</span>
              <div className="diff-progress">
                <div className="diff-progress-fill diff-hard" style={{ width: `${((lc.hardSolved ?? 0) / (lc.totalHard ?? 951)) * 100}%` }}></div>
              </div>
              <span className="diff-count"><b>{fmt(lc.hardSolved)}</b> / {fmt(lc.totalHard)}</span>
            </div>
          </div>
          <div className="stats-chart-container">
            <canvas ref={lcChartRef} className="stats-chart-canvas"></canvas>
          </div>
        </article>

        {/* Codeforces */}
        <article className="stats-card">
          <div className="stats-card-title">
            <SiCodeforces />
            <h3>Codeforces</h3>
          </div>
          <div className="cf-stats-grid">
            <div className="cf-stat-box">
              <span className="cf-stat-icon">AC</span>
              <span className="cf-stat-label">Solved</span>
              <strong>{fmt(cf.solved)}</strong>
            </div>
            <div className="cf-stat-box">
              <span className="cf-stat-icon">RT</span>
              <span className="cf-stat-label">Rating</span>
              <strong>{fmt(cf.rating)}</strong>
            </div>
            <div className="cf-stat-box">
              <span className="cf-stat-icon">MAX</span>
              <span className="cf-stat-label">Max rating</span>
              <strong>{fmt(cf.maxRating)}</strong>
            </div>
            <div className="cf-stat-box">
              <span className="cf-stat-icon">RK</span>
              <span className="cf-stat-label">Rank</span>
              <strong>{fmt(cf.rank)}</strong>
            </div>
          </div>
          <div className="stats-chart-container">
            <canvas ref={cfChartRef} className="stats-chart-canvas"></canvas>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CodingStats;
