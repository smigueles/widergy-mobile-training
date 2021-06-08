export const buttonsCreator = (userText, setUserText, setCalcText) => {
  const handlePress = number => {
    if (number === '=') {
      return calculation();
    }
    setUserText(userText + number);
  };

  const calculation = () => {
    // eslint-disable-next-line no-eval
    setCalcText(eval(userText));
  };

  const handleOperation = op => {
    if (op === 'Clear') {
      setUserText('');
      setCalcText(0);
      return;
    }

    if (op === 'Del') {
      setUserText(userText.toString().substring(0, userText.length - 1));
      return;
    }

    if (
      ['Del', 'Clear', '+', '-', '*', '/'].includes(
        userText.toString().split('').pop(),
      )
    ) {
      return;
    }
    setUserText(userText + op);
  };

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
