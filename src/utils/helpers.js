// It will generate a color base on the string provide and it will return an hex color
export const stringToColor = (string) => {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

// We will use this for MUI Avatar component Only
export const stringAvatar = (name, addedSx) => {
  const splittedText = name.split(" ");
  const children =
    splittedText.length > 1
      ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
      : `${name.split(" ")[0][0]}`;
  return {
    sx: {
      ...addedSx,
      bgcolor: stringToColor(name),
    },
    children,
  };
};
