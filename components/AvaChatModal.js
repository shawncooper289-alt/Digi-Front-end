import { useState } from 'react';
import { Send, X } from 'lucide-react';
import AvaSkyeVisual from './AvaSkyeVisual';

const starters = [
  'Give me a launch plan',
  'Write my 7-day email flow',
  'Sharpen my offer in plain English',
];

export default function AvaChatModal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi, I'm Ava Skye. Tell me what you sell and who you want to reach, and I'll turn it into a clear campaign, funnel, or follow-up plan.",
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
          <small>Human-feeling strategy help</small>
        </span>
      </button>

      {open && (
        <div className="overlay" role="dialog" aria-modal="true" aria-label="Ava Skye AI chat">
          <div className="modal">
            <header>
              <div className="avatar"><AvaSkyeVisual compact /></div>
              <div>
                <strong>Ava Skye</strong>
                <span>Your DigiMark101 growth strategist</span>
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
                placeholder="Tell Ava what you want to grow..."
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
          border: 1px solid rgba(63, 114, 130, 0.22);
          border-radius: 999px;
          padding: 10px 16px 10px 10px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #122f3c;
          background: rgba(244, 248, 249, 0.94);
          box-shadow: 0 24px 70px rgba(35, 76, 92, 0.2);
          backdrop-filter: blur(18px);
          cursor: pointer;
          font-weight: 900;
        }

        .launcher-orb,
        .avatar {
          display: grid;
          place-items: center;
          color: #122f3c;
        }

        .launcher-orb {
          width: 46px;
          height: 46px;
          border-radius: 999px;
          box-shadow: 0 0 32px rgba(63, 114, 130, 0.28);
          overflow: hidden;
        }

        .launcher small,
        header span {
          display: block;
          color: #3f7282;
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
          background: rgba(16, 42, 54, 0.24);
          backdrop-filter: blur(8px);
        }

        .modal {
          width: min(430px, 100%);
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 28px;
          background:
            radial-gradient(circle at 25% 0%, rgba(95, 142, 160, 0.2), transparent 18rem),
            rgba(244, 248, 249, 0.98);
          box-shadow: 0 30px 110px rgba(35, 76, 92, 0.22);
          color: #122f3c;
        }

        header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px;
          border-bottom: 1px solid rgba(63, 114, 130, 0.16);
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
          color: #456775;
          background: rgba(215, 233, 238, 0.9);
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
          color: #173543;
          line-height: 1.5;
          font-size: 0.92rem;
          white-space: pre-wrap;
        }

        .assistant {
          align-self: flex-start;
          border: 1px solid rgba(148, 163, 184, 0.18);
          background: rgba(255, 255, 255, 0.78);
        }

        .user {
          align-self: flex-end;
          background: linear-gradient(135deg, #234c5c, #5f8ea0);
          color: #ffffff;
        }

        .loading {
          color: #3f7282;
        }

        .starters {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 0 18px 14px;
        }

        .starters button {
          flex: 0 0 auto;
          border: 1px solid rgba(63, 114, 130, 0.22);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.7);
          color: #3f7282;
          padding: 8px 10px;
          cursor: pointer;
          font-size: 0.76rem;
          font-weight: 800;
        }

        form {
          display: flex;
          gap: 10px;
          padding: 16px;
          border-top: 1px solid rgba(63, 114, 130, 0.16);
        }

        input {
          width: 100%;
          border: 1px solid rgba(63, 114, 130, 0.2);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.74);
          color: #122f3c;
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
          color: #ffffff;
          background: linear-gradient(135deg, #234c5c, #5f8ea0);
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
