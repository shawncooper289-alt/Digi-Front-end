import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Initializing Dynasty...');
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Test existing API endpoint (unchanged)
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(() => {
        setMessage('Welcome to Your Digital Dynasty');
        setLoading(false);
      });
  }, []);

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
      {/* Animated background elements */}
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
        .dynasty-box {
          animation: slideUp 0.8s ease-out 0.5s both;
        }
        .dynasty-button {
          animation: slideUp 0.8s ease-out 0.7s both;
        }
      `}</style>

      {/* Main Content - Z-index to appear over background */}
      <div style={{ position: 'relative', zIndex: 10 }}>
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
            maxWidth: '600px',
            marginBottom: '2rem',
            opacity: 0.85,
            lineHeight: '1.6'
          }}
        >
          Advanced AI-powered marketing automation. The simplest structure. Unlimited potential.
        </p>

        {/* Status Box */}
        <div
          className="dynasty-box"
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
            {loading ? 'Initializing...' : 'System Status'}
          </h2>
          <p style={{ fontSize: '1.1rem', margin: 0, minHeight: '2rem' }}>
            {loading ? (
              <span style={{ opacity: 0.7 }}>Connecting to Ava OS...</span>
            ) : (
              <span style={{ color: '#34d399' }}>✓ {message}</span>
            )}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="dynasty-button" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              transform: 'translateY(0)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 15px 35px rgba(59,130,246,0.5), 0 0 60px rgba(236,72,153,0.3)'
              }
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

          <button
            onClick={() => {
              fetch('/api/hello', { method: 'POST' })
                .then((res) => res.json())
                .then((data) => setMessage(data.message))
                .catch(() => setMessage('Error connecting to backend'));
            }}
            style={{
              padding: '1rem 2rem',
              borderRadius: '999px',
              border: '2px solid rgba(148,163,184,0.5)',
              cursor: 'pointer',
              background: 'transparent',
              color: '#f9fafb',
              fontWeight: 700,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'rgba(96,165,250,0.8)',
                background: 'rgba(59,130,246,0.1)'
              }
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'rgba(96,165,250,0.8)';
              e.target.style.background = 'rgba(59,130,246,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(148,163,184,0.5)';
              e.target.style.background = 'transparent';
            }}
          >
            Test Ava OS
          </button>
        </div>

        {/* Footer */}
        <p
          style={{
            marginTop: '3rem',
            fontSize: '0.9rem',
            opacity: 0.6,
            animation: 'fadeIn 1.5s ease-out 1s both'
          }}
        >
          Powered by Ava OS • Base44 Backend • Ava Knowledge Base
          <br />
          <small>Deployed on Vercel • Fully responsive • Zero downtime updates</small>
        </p>
      </div>
    </main>
  );
}
