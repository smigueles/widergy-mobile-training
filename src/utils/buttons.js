export const buttonsCreator = (handleOperation, handlePress) => {
  const buttons = [
    {
      type: 'operations',
      labels: ['Del', 'Clear', '+', '-', '*', '/'],
      action: b => handleOperation(b),
    },
    {
      type: 'numbers',
      labels: [7, 8, 9],
      action: b => handlePress(b),
    },
    {
      type: 'numbers',
      labels: [4, 5, 6],
      action: b => handlePress(b),
    },
    {
      type: 'numbers',
      labels: [1, 2, 3],
      action: b => handlePress(b),
    },
    {
      type: 'numbers',
      labels: ['.', 0, '='],
      action: b => handlePress(b),
    },
  ];
  return buttons;
};
