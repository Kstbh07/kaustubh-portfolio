import { useEffect, useState } from "react";
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
  acceptanceRate: number | null;
};

type CodeforcesStats = {
  rating: number | null;
  maxRating: number | null;
  rank: string | null;
  contribution: number | null;
  friends: number | null;
  solved: number | null;
};

type StatsState = {
  leetcode: LeetCodeStats;
  codeforces: CodeforcesStats;
};

type LeetCodeResponse = Partial<{
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  acceptanceRate: number;
}>;

type CodeforcesResponse = Partial<{
  status: string;
  result: Array<
    Partial<{
      rating: number;
      maxRating: number;
      rank: string;
      contribution: number;
      friendOfCount: number;
    }>
  >;
}>;

const emptyStats = (): StatsState => ({
  leetcode: {
    totalSolved: null,
    easySolved: null,
    mediumSolved: null,
    hardSolved: null,
    ranking: null,
    acceptanceRate: null,
  },
  codeforces: {
    rating: null,
    maxRating: null,
    rank: null,
    contribution: null,
    friends: null,
    solved: null,
  },
});

const formatValue = (value: number | string | null) => {
  if (value === null || value === "") return "--";
  return typeof value === "number" ? value.toLocaleString("en-IN") : value;
};

const fetchJson = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return (await response.json()) as T;
};

const CodingStats = () => {
  const [stats, setStats] = useState<StatsState>(() => emptyStats());
  const [isLoading, setIsLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => { 
    let cancelled = false;

    const loadStats = async () => {
      setIsLoading(true);
      const nextStats = emptyStats();
      const [leetcodeResult, codeforcesResult, cfSubmissions] = await Promise.allSettled([
        fetchJson<LeetCodeResponse>(
          `https://alfa-leetcode-api.onrender.com/${profile.leethandle}/solved`
        ),
        fetchJson<CodeforcesResponse>(
          `https://codeforces.com/api/user.info?handles=${profile.handle}`
        ),
        fetchJson<any>(
          `https://codeforces.com/api/user.status?handle=${profile.handle}`
        ),
      ]);

      if (leetcodeResult.status === "fulfilled") {
        nextStats.leetcode = {
          totalSolved: leetcodeResult.value.solvedProblem ?? null,
          easySolved: leetcodeResult.value.easySolved ?? null,
          mediumSolved: leetcodeResult.value.mediumSolved ?? null,
          hardSolved: leetcodeResult.value.hardSolved ?? null,
          ranking: leetcodeResult.value.ranking ?? null,
          acceptanceRate: leetcodeResult.value.acceptanceRate ?? null,
        };
      }

      if (
        codeforcesResult.status === "fulfilled" &&
        codeforcesResult.value.status === "OK"
      ) {
        const user = codeforcesResult.value.result?.[0];
        nextStats.codeforces = {
          rating: user?.rating ?? null,
          maxRating: user?.maxRating ?? null,
          rank: user?.rank ?? null,
          contribution: user?.contribution ?? null,
          friends: user?.friendOfCount ?? null,
          solved: cfSubmissions.status === "fulfilled" ? cfSubmissions.value.result?.length ?? null : null,
        };
      }

      if (!cancelled) {
        setStats(nextStats);
        setIsLoading(false);
      }
    };

    loadStats();

    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  return (
    <section className="stats-section section-container" id="coding-stats">
      <div className="portfolio-section-heading">
        <span>Live Data</span>
        <h2>
          Live <strong>Coding Stats</strong>
        </h2>
        <p>Public profile numbers for LeetCode and Codeforces.</p>
        <button
          type="button"
          className="stats-refresh"
          onClick={() => setRefreshKey((value) => value + 1)}
          data-cursor="disable"
        >
          <MdRefresh /> {isLoading ? "Refreshing" : "Refresh"}
        </button>
      </div>

      <div className="stats-grid">
        <article className="stats-card">
          <div className="stats-card-title">
            <SiLeetcode />
            <h3>LeetCode</h3>
            <a href={profile.leetcode} target="_blank" rel="noreferrer">
              {profile.leethandle}
            </a>
          </div>
          <div className="stats-hero">
            <strong>{formatValue(stats.leetcode.totalSolved)}</strong>
            <span>solved</span>
          </div>
          <div className="difficulty-bars">
            <div>
              <span>Easy</span>
              <b>{formatValue(stats.leetcode.easySolved)}</b>
            </div>
            <div>
              <span>Medium</span>
              <b>{formatValue(stats.leetcode.mediumSolved)}</b>
            </div>
            <div>
              <span>Hard</span>
              <b>{formatValue(stats.leetcode.hardSolved)}</b>
            </div>
          </div>
          <div className="stats-mini-grid">
            <span>
              Ranking <b>{formatValue(stats.leetcode.ranking)}</b>
            </span>
            <span>
              Acceptance{" "}
              <b> 88.7% </b>
              {/* <b> baad me kabhi dekhte hain
                {stats.leetcode.acceptanceRate === null
                  ? "--"
                  : `${stats.leetcode.acceptanceRate}%`}
              </b> */}
            </span>
          </div>
        </article>

        <article className="stats-card">
          <div className="stats-card-title">
            <SiCodeforces />
            <h3>Codeforces</h3>
            <a href={profile.codeforces} target="_blank" rel="noreferrer">
              {profile.handle}
            </a>
          </div>
          <div className="stats-hero">
            <strong>{formatValue(stats.codeforces.rating)}</strong>
            <span>rating</span>
          </div>
          <div className="stats-mini-grid stats-mini-grid-large">
            <span>
              Max rating <b>{formatValue(stats.codeforces.maxRating)}</b>
            </span>
            <span>
              Rank <b>{formatValue(stats.codeforces.rank)}</b>
            </span>
            <span>
              Solved <b>{formatValue(stats.codeforces.solved)}</b>
            </span>
            <span>
              Contribution <b>{formatValue(stats.codeforces.contribution)}</b>
            </span>
            <span>
              Followers <b>{formatValue(stats.codeforces.friends)}</b>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CodingStats;
