export const metadata = {
  title: "Rick and Morty App",
  description: "Explore personagens do Rick and Morty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
