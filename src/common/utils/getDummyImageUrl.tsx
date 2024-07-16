const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getDummyImageUrl = ({ size = [192, 108] }) => {
  const randomId = getRandomInteger(1, 1)

  return `https://picsum.photos/${size[0]}/${size[1]}?random=${randomId}`
}
