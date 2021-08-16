// this could be a .json file, too:
// {
//   "$schema": "http://json-schema.org/draft-07/schema",
//   "$id": "https://appium.io/fake-driver.json",
//   "type": "object",
//   "title": "Fake Driver Configuration",
//   "description": "A schema for Fake Driver arguments",
//   "properties": {
//     "answer": {
//       "type": "number",
//       "description": "The answer to life, the universe, and everything",
//       "default": 42
//     }
//   },
//   "additionalProperties": true
// }


export default {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'https://appium.io/fake-driver.json',
  type: 'object',
  title: 'Fake Driver Configuration',
  description: 'A schema for Fake Driver arguments',
  properties: {
    answer: {
      type: 'number',
      description: 'The answer to life, the universe, and everything',
      default: 42,
    },
  },
  additionalProperties: true,
};
