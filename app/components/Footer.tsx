export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '240px',
        padding: '40px 20px',
        fontFamily: 'Ginto Copilot, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif',
        fontSize: '15px',
        fontWeight: 400,
        color: 'rgba(39, 35, 32, 0.6)',
        lineHeight: '1.53'
      }}
    >
      Designed and developed by Menghui with AI @ {currentYear}
    </footer>
  );
}
