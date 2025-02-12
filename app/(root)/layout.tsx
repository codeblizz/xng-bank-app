
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="flex flex-col h-screen w-full font-inter">
      Sidebar
      {children}
    </main>
  );
}