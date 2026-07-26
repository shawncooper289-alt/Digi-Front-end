import { useState } from 'react';
import { Send, X } from 'lucide-react';
import AvaSkyeVisual from './AvaSkyeVisual';

const starters = [
  'Build me a launch plan',
  'Write a 7-day email sequence',
  'Improve my offer positioning',
];

export default function AvaChatModal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'I am Ava Skye, your DigiMark101 AI Chief of Staff. Ask me to plan a campaign, funnel, content system, or lead-generation sprint.',
    },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (preset) => {
    const value = String(preset || input).trim();
    if (!value || loading) return;

    setInput('');
    setLoading(true);
    setMessages((current) => [...current, { role: 'user', content: value }]);

    try {
      const response = await fetch('/api/ava', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: value }),
      });
      const data = await response.json();

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: response.ok ? data.reply : data.error || 'Ava is unavailable right now.',
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        { role: 'assistant', content: 'Ava could not connect. Please try again in a moment.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="launcher" onClick={() => setOpen(true)} aria-label="Open Ava AI chat">
        <span className="launcher-orb"><AvaSkyeVisual compact /></span>
        <span>
          Ask Ava
          <small>AI Gateway online</small>
        </span>
      </button>

      {open && (
        <div className="overlay" role="dialog" aria-modal="true" aria-label="Ava Skye AI chat">
          <div className="modal">
            <header>
              <div className="avatar"><AvaSkyeVisual compact /></div>
              <div>
                <strong>Ava Skye</strong>
                <span>Powered by Vercel AI Gateway</span>
              </div>
              <button className="close" onClick={() => setOpen(false)} aria-label="Close Ava chat">
                <X size={18} />
              </button>
            </header>

            <div className="messages">
              {messages.map((message, index) => (
                <div className={`bubble ${message.role}`} key={`${message.role}-${index}`}>
                  {message.content}
                </div>
              ))}
              {loading && <div className="bubble assistant loading">Ava is thinking...</div>}
            </div>

            <div className="starters">
              {starters.map((starter) => (
                <button key={starter} onClick={() => sendMessage(starter)} disabled={loading}>
                  {starter}
                </button>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Ava to build your next growth move..."
                aria-label="Message Ava"
              />
              <button type="submit" disabled={loading || !input.trim()} aria-label="Send message">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .launcher {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 40;
          border: 1px solid rgba(192, 132, 252, 0.38);
          border-radius: 999px;
          padding: 10px 16px 10px 10px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #fff;
          background: rgba(15, 23, 42, 0.9);
          box-shadow: 0 24px 70px rgba(79, 70, 229, 0.42);
          backdrop-filter: blur(18px);
          cursor: pointer;
          font-weight: 900;
        }

        .launcher-orb,
        .avatar {
          display: grid;
          place-items: center;
          color: #fff;
        }

        .launcher-orb {
          width: 46px;
          height: 46px;
          border-radius: 999px;
          box-shadow: 0 0 32px rgba(168, 85, 247, 0.65);
          overflow: hidden;
        }

        .launcher small,
        header span {
          display: block;
          color: #c4b5fd;
          font-size: 0.72rem;
          font-weight: 800;
          margin-top: 2px;
        }

        .overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: grid;
          place-items: end;
          padding: 24px;
          background: rgba(2, 6, 23, 0.44);
          backdrop-filter: blur(8px);
        }

        .modal {
          width: min(430px, 100%);
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 28px;
          background:
            radial-gradient(circle at 25% 0%, rgba(99, 102, 241, 0.22), transparent 18rem),
            rgba(15, 23, 42, 0.96);
          box-shadow: 0 30px 110px rgba(2, 6, 23, 0.72);
          color: #fff;
        }

        header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px;
          border-bottom: 1px solid rgba(148, 163, 184, 0.16);
        }

        .avatar {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          overflow: hidden;
        }

        .close {
          margin-left: auto;
          width: 34px;
          height: 34px;
          border: 0;
          border-radius: 999px;
          display: grid;
          place-items: center;
          color: #cbd5e1;
          background: rgba(30, 41, 59, 0.9);
          cursor: pointer;
        }

        .messages {
          height: 360px;
          overflow-y: auto;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bubble {
          max-width: 88%;
          border-radius: 18px;
          padding: 12px 14px;
          color: #e2e8f0;
          line-height: 1.5;
          font-size: 0.92rem;
          white-space: pre-wrap;
        }

        .assistant {
          align-self: flex-start;
          border: 1px solid rgba(148, 163, 184, 0.18);
          background: rgba(30, 41, 59, 0.86);
        }

        .user {
          align-self: flex-end;
          background: linear-gradient(135deg, #4f46e5, #a855f7);
          color: #fff;
        }

        .loading {
          color: #c4b5fd;
        }

        .starters {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 0 18px 14px;
        }

        .starters button {
          flex: 0 0 auto;
          border: 1px solid rgba(129, 140, 248, 0.28);
          border-radius: 999px;
          background: rgba(79, 70, 229, 0.14);
          color: #c4b5fd;
          padding: 8px 10px;
          cursor: pointer;
          font-size: 0.76rem;
          font-weight: 800;
        }

        form {
          display: flex;
          gap: 10px;
          padding: 16px;
          border-top: 1px solid rgba(148, 163, 184, 0.16);
        }

        input {
          width: 100%;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 999px;
          background: rgba(2, 6, 23, 0.64);
          color: #fff;
          min-height: 46px;
          padding: 0 15px;
          outline: none;
        }

        form button {
          flex: 0 0 auto;
          width: 46px;
          height: 46px;
          border: 0;
          border-radius: 999px;
          display: grid;
          place-items: center;
          color: #fff;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          cursor: pointer;
        }

        button:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        @media (max-width: 640px) {
          .overlay {
            padding: 12px;
          }

          .launcher {
            right: 14px;
            bottom: 14px;
          }

          .messages {
            height: 320px;
          }
        }
      `}</style>
    </>
  );
}
