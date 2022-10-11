export interface PostDetails {
  title: string;
  url: string;
  permalink: string;
  thumbnail?: string;
  id: string;
}

export interface RedditPost {
  data: PostDetails;
}

export interface RedditData {
  children: RedditPost[];
}

export interface RedditResponse {
  data: RedditData;
}
