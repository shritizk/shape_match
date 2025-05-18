function generateRandomComponentClasses() {
  const shapes = ['circle', 'triangle', 'square', 'rectangle'];
  const colors = [
    'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald',
    'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia',
    'pink', 'rose', 'stone', 'neutral', 'zinc', 'gray', 'slate'
  ];

  const classes = [];

  for (let i = 0; i < 50; i++) {
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const bgClass = `bg-${color}-200`;

    let className = '';

    switch (shape) {
      case 'circle':
        className = `${bgClass} rounded-full w-16 h-16`;
        break;
      case 'square':
        className = `${bgClass} w-16 h-16`;
        break;
      case 'rectangle':
        className = `${bgClass} w-24 h-12`;
        break;
      case 'triangle':
        className = `w-0 h-0 
          border-l-[32px] border-r-[32px] border-b-[48px]
          border-l-transparent border-r-transparent border-b-${color}-200`;
        break;
    }

    classes.push({className : className, shape : shape});
  }

  return classes;
}


export default generateRandomComponentClasses;