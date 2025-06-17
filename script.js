const container = '#sphere';
const texts = [
  'Autocontrol',
  'Entusiasmo',
  'Mesura',
  'Paciencia',
  'Sentido de justicia',
  'Empatía',
  'Asertividad',
  'Resiliencia'
];

const options = {
  radius: 180,
  maxSpeed: 'normal',
  initSpeed: 'normal',
  keep: true
};

TagCloud(container, texts, options);
