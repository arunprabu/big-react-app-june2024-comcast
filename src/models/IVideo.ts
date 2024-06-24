export interface IVideo {
  id: number;
  trendingRank?: number;
  title: string;
  thumnailUrl: string;
  category: string;
  publishedOn: string;
  description: string;
  views: string;
  isInWatchlist?: boolean;
}
