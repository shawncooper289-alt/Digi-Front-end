export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #050816 0%, #0f1419 50%, #1a1f2e 100%)',
        color: '#f9fafb',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        padding: '2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '-200px',
          left: '-200px',
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          bottom: '-150px',
          right: '-150px',
          animation: 'float 8s ease-in-out infinite reverse'
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .dynasty-title {
          animation: slideUp 0.8s ease-out 0.1s both;
        }
        .dynasty-subtitle {
          animation: slideUp 0.8s ease-out 0.3s both;
        }
        .dynasty-card {
          animation: slideUp 0.8s ease-out 0.5s both;
        }
        .dynasty-button {
          animation: slideUp 0.8s ease-out 0.7s both;
        }
      `}</style>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '760px' }}>
        <h1
          className="dynasty-title"
          style={{
            fontSize: '3.5rem',
            fontWeight: 800,
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #60a5fa 0%, #ec4899 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px'
          }}
        >
          Your Digital Dynasty Starts Here
        </h1>

        <p
          className="dynasty-subtitle"
          style={{
            fontSize: '1.3rem',
            maxWidth: '640px',
            margin: '0 auto 2rem',
            opacity: 0.85,
            lineHeight: '1.6'
          }}
        >
          Advanced AI-powered marketing automation built to help you launch, manage, and scale with confidence.
        </p>

        <div
          className="dynasty-card"
          style={{
            padding: '2rem',
            borderRadius: '1rem',
            background:
              'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(236,72,153,0.1) 100%)',
            border: '1px solid rgba(148,163,184,0.3)',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(15,23,42,0.2)'
          }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#60a5fa' }}>
            Built for modern growth teams
          </h2>
          <p style={{ fontSize: '1.05rem', margin: 0, lineHeight: '1.7', opacity: 0.82 }}>
            Organize campaigns, streamline client workflows, and keep your marketing operations moving from one polished workspace.
          </p>
        </div>

        <div className="dynasty-button" style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => {
              window.location.href = '/dashboard';
            }}
            style={{
              padding: '1rem 2rem',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #3b82f6, #ec4899)',
              color: '#f9fafb',
              fontWeight: 700,
              fontSize: '1rem',
              boxShadow: '0 10px 25px rgba(59,130,246,0.4), 0 0 50px rgba(236,72,153,0.2)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 35px rgba(59,130,246,0.5), 0 0 60px rgba(236,72,153,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 25px rgba(59,130,246,0.4), 0 0 50px rgba(236,72,153,0.2)';
            }}
          >
            Enter Dashboard
          </button>
        </div>

        <p
          style={{
            marginTop: '3rem',
            fontSize: '0.9rem',
            opacity: 0.6,
            animation: 'fadeIn 1.5s ease-out 1s both'
          }}
        >
          Powered by DigiMark101 • Deployed on Vercel
        </p>
      </div>
    </main>
  );
}
