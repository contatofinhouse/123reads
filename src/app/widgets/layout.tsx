export default function WidgetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ margin: 0, padding: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        /* Override global styles for widgets */
        body { margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: transparent !important; }
        .container { display: none; } /* Hide any accidental containers if they leak */
      `}</style>
      {children}
    </div>
  );
}
