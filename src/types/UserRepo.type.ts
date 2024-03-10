type UserRepoType = UserRepoData[];

export type UserRepoData = {
  id: number;
  name: string;
  language: string;
  stargazers_count: number;
};

export default UserRepoType;
