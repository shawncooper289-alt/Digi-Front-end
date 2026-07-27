export const AVASKYE_IDENTITY_LOCK = {
  face: 'use the approved uploaded Ava Skye portrait photo only',
  hair: 'straight black shoulder-length hair with a soft side part from the approved photo',
  wardrobe: 'navy business blazer and white blouse from the approved photo; business suit can vary only for cinematic videos and ads',
  asset: '/ava-skye.jpg',
};

export default function AvaSkyeVisual({ compact = false }) {
  return (
    <figure
      className={`ava-photo-card ${compact ? 'compact' : ''}`}
      aria-label="Ava Skye approved static portrait photo"
    >
      <img
        src={AVASKYE_IDENTITY_LOCK.asset}
        alt="Ava Skye in a navy blazer and white blouse with straight black shoulder-length hair"
        loading={compact ? 'lazy' : 'eager'}
      />
      {!compact && (
        <figcaption>
          <span>Meet Ava Skye</span>
          <strong>Approved static portrait for DigiMark101</strong>
          <p>This site must use the supplied Ava Skye photo asset. No generated, animated, or illustrated Ava portrait should render here.</p>
        </figcaption>
      )}

      <style jsx>{`
        .ava-photo-card {
          margin: 0;
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 0.28);
          border-radius: 34px;
          padding: 14px;
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.9));
          box-shadow: 0 34px 120px rgba(2, 6, 23, 0.52), 0 0 80px rgba(147, 51, 234, 0.16);
          color: #ffffff;
        }

        img {
          width: 100%;
          aspect-ratio: 1 / 1;
          display: block;
          object-fit: cover;
          object-position: center top;
          border-radius: 26px;
          background: #071014;
        }

        figcaption {
          padding: 20px 6px 4px;
        }

        figcaption span {
          display: block;
          color: #d8b4fe;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        figcaption strong {
          display: block;
          margin-top: 8px;
          color: #ffffff;
          font-size: clamp(1.55rem, 3vw, 2.4rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
        }

        figcaption p {
          margin: 12px 0 0;
          color: #e9d5ff;
          line-height: 1.65;
        }

        .compact {
          width: 46px;
          height: 46px;
          padding: 0;
          border-radius: 999px;
        }

        .compact img {
          width: 100%;
          height: 100%;
          border-radius: 999px;
        }
      `}</style>
    </figure>
  );
}
