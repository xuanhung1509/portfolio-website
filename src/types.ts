export type WorkItemProps = {
  id: number;
  title: string;
  description: string;
  images: {
    desktop: string;
    tablet: string;
  };
  tags: string[];
  liveSite: string;
  sourceCode: string | null;
};
