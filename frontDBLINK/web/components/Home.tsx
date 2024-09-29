// src/pages/page.tsx
import RootLayout from '@/app/layout'; // Adjust the path as necessary
import Home from '@/app/homePage/page'; // Ensure this path is correct

const Page = () => {
  return (
    <RootLayout>
      <Home /> {/* Render Home directly */}
    </RootLayout>
  );
};

export default Page;
