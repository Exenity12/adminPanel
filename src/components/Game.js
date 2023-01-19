import { React } from 'react';
import '../App.css';

function showMenu() {
  console.log("123")
}

function Game() {
  return (
    <div className="Game">
      <div className='GamerBaker'>Baker</div>
      <div className="Backdrop">
        <div className="Fridge">
          <div className="ButtonFridge" onClick={showMenu}>1</div>
          <div className='ButtonsFridge'>
            <div className="ButtonFridgeOne" onClick={showMenu}>1</div>
            <div className="ButtonFridgeTwo" onClick={showMenu}>1</div>
          </div>
        </div>
        <div className="Fridge">
          <div className="ButtonFridge" onClick={showMenu}>1</div>
          <div className='ButtonsFridge'>
            <div className="ButtonFridgeOne" onClick={showMenu}>1</div>
            <div className="ButtonFridgeTwo" onClick={showMenu}>1</div>
          </div>
        </div>
        <div className="Fridge">
          <div className="ButtonFridge" onClick={showMenu}>1</div>
          <div className='ButtonsFridge'>
            <div className="ButtonFridgeOne" onClick={showMenu}>1</div>
            <div className="ButtonFridgeTwo" onClick={showMenu}>1</div>
          </div>
        </div>
        <div className="Fridge">
          <div className="ButtonFridge" onClick={showMenu}>1</div>
          <div className='ButtonsFridge'>
            <div className="ButtonFridgeOne" onClick={showMenu}>1</div>
            <div className="ButtonFridgeTwo" onClick={showMenu}>1</div>
          </div>
        </div>
        <div className="Fridge">
          <div className="ButtonFridge" onClick={showMenu}>1</div>
          <div className='ButtonsFridge'>
            <div className="ButtonFridgeOne" onClick={showMenu}>1</div>
            <div className="ButtonFridgeTwo" onClick={showMenu}>1</div>
          </div>
        </div>
      </div>
      <div className="Background"></div>
    </div>
  );
}

export default Game;
