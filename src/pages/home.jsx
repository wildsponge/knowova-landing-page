import { HomeView } from 'src/home/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Knowova - AI-Powered Learning Platform',
  description:
    'Transform your learning experience with Knowova - the intelligent education platform that adapts to your learning style and helps you achieve your academic goals',
};

export function HomePage() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />

      <HomeView />
    </>
  );
}