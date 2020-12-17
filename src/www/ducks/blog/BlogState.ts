export interface BlogState {
  blog: {
    list: [{ id: string; title: string }];
    currentPost: {
      id: string;
      title: string;
      body: string;
    } | null;
  };
}
