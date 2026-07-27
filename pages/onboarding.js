import ProductPage from '../components/ProductPage';
const page = {
  slug: 'onboarding',
  title: 'Onboarding',
  eyebrow: 'Buyer handoff',
  headline: 'Turn a new buyer into a guided Digimark101 setup.',
  intro: 'The onboarding page gives customers a clear after-purchase direction: what Ava needs, what the team should prepare, and how the campaign workspace begins.',
  cta: 'Start Onboarding',
  metrics: [['15 min', 'intake target'], ['3 steps', 'setup path'], ['1 plan', 'first campaign']],
  sections: [
    ['Business intake', 'Collect offer, audience, goals, and current channels.'],
    ['Ava setup', 'Frame the first campaign and tone of voice.'],
    ['Launch plan', 'Move the customer into campaigns, email, social, and lead capture.'],
  ],
  workflow: [
    ['01', 'Confirm package', 'Start from the selected seat tier or purchase handoff.'],
    ['02', 'Gather details', 'Capture the business basics Ava needs.'],
    ['03', 'Build first plan', 'Create the first campaign sprint inside Digimark101.'],
  ],
};
export default function Onboarding() { return <ProductPage page={page} />; }
