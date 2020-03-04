import React from 'react';
import { xljsxLite } from 'xljsx-lite';
import logo from './logo.svg';
import './App.css';

// Create a helper function to create the cells
const generateCell = value => ({
  value,
  // In a future release I'd like to automatically determine the type for users, like this
  type: isNaN(value) ? 'string' : 'number'
});

// Create a helper function to create the rows
const generateRow = (...cells) => ([...cells]);

const sheet1 = {
  // If we don't create a sheetName, xljsx-lite will generate the standard "Sheet 1" for us
  data: [
    generateRow(
      generateCell('First Name'),
      generateCell('Last Name'),
      generateCell('Favorite Number')
    ),
    generateRow(
      generateCell('Elliot'),
      generateCell('Stoner'),
      generateCell(83)
    ),
    generateRow(
      generateCell('Kiva'),
      generateCell('Gayle'),
      generateCell(2)
    ),
    generateRow(
      generateCell('Chad'),
      generateCell('Florida'),
      generateCell(9)
    )
  ]
};

const sheet2 = {
  sheetName: 'Famous Numbers',
  data: [
    generateRow(
      generateCell('More'),
      generateCell('Data'),
      generateCell('Here')
    ),
    generateRow(
      generateCell(3.1415),
      generateCell(2.7182),
      generateCell('6.0221515 x 10^23'),
      generateCell('186,282'),
      generateCell('i')
    )
  ]
};

const config = {
  filename: 'Example XLJSX file',
  sheets: [sheet1, sheet2]
};

const downloadSampleFile = () => {
  xljsxLite(config);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span
          onClick={downloadSampleFile}
          style={{ cursor: 'pointer' }}
        >
          Download Sample File
        </span>
      </header>
    </div>
  );
}

export default App;
