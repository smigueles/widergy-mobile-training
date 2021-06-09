const getNumbers = buttons => {
  return buttons.filter(b => b.type === 'numbers').map(b => b.labels);
};

const getAction = (buttons, filter) => {
  return buttons.find(b => b.type === filter).action;
};

const getOperations = buttons => {
  return buttons.find(b => b.type === 'operations').labels;
};

export const getButtons = (buttons, filter) => {
  if (filter === 'numbers') {
    return {numbers: getNumbers(buttons), action: getAction(buttons, filter)};
  }
  if (filter === 'operations') {
    return {
      operations: getOperations(buttons),
      action: getAction(buttons, filter),
    };
  }
  return buttons;
};
