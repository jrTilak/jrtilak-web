export interface RepoCardPropsType {
  icon: string;
  username: string;
  repo: string;
  desc: string;
  lang: string;
  stars: number;
  forks: number;
  issues: number;
  langColor: string;
}

export interface ProfileCardProps {
  img: string;
  nickname: string;
  createdAt: string;
  about: string;
  titles: string[];
}
