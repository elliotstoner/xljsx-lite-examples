# xljsx-lite-examples

This repo contains examples of how to use [xljsx-lite](https://www.github.com/elliotstoner/xljsx-lite).

## How to Use
Creating an excel file is easy, especially if you use some of the helper methods used in these examples.

Your config object should be a json object containing at least the following fields:
- `filename`: the name of the file you're creating (required)
- `sheets`: an array of sheet objects (see below) (required)

A sheet object should contain the following fields:
- `sheetName`: the name of the sheet. Not required - if ommitted, xljsx-lite will automatically name the sheets "Sheet1", "Sheet2", etc
- `data`: an array of arrays (the outer array is the rows and the inner array is the cell content)

An example config object:
```
const config = {
  filename: 'report',
  sheets: [
    {
      sheetName: 'testSheet',
      data: [
        ['Test', 1000],
      ],
    },
    {
      data: [
        ['Test 2',2000],
      ],
    },
  ],
};
```

As of v2.0.0, data is no longer an object with "value" and "type" fields; xljsx-lite automatically determines that for you.
If you really don't want to change, use v1.0.2 (but updates will not be pushed to that version).
