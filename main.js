function generateUUID() {
    const randomHex = () => Math.floor(Math.random() * 16).toString(16);
  
    const segments = [
      randomHex() + randomHex(),
      randomHex() + randomHex(),
      randomHex() + randomHex(),
      randomHex() + randomHex(),
    ];
  
    segments[2] = '4' + segments[2].substring(1); 
    segments[3] = (parseInt(segments[3], 16) & 0x3fff | 0x8000).toString(16); 
  
    const uuid = segments.join('-');
  
    return uuid;
}
console.log(generateUUID());
  
const data = [
  {
    id: generateUUID(),
    name: "name 1",
    image: "",
    type: "",
    description: "",
  },
  {
    id: generateUUID(),
    name: "name 1",
    image: "",
    type: "",
    description: "",
  },
  {
    id: generateUUID(),
    name: "name 1",
    image: "",
    type: "",
    description: "",
  },
  {
    id: generateUUID(),
    name: "name 1",
    image: "",
    type: "",
    description: "",
  },
  {
    id: generateUUID(),
    name: "name 1",
    image: "",
    type: "",
    description: "",
  },
  {
    id: generateUUID(),
    name: "name 1",
    image: "",
    type: "",
    description: "",
  },
];
