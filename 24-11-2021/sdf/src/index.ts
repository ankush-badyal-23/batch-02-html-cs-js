import PIXI from 'pixi.js';

const app = new PIXI.Application({
    width: 800,
    height: 600,
});

const style = {
  fontSize: '24px',
  fontWeight: 'bold',
  fill: '#F7EDCA',
  align: 'center',
  fontURL:'assets/orange-juice-2.0-msdf.json',
  imageURL:'assets/orangejuice20.png',
}

const sdfText = new PIXI.sdf.Text('Abc', style);
app.stage.addChild(sdfText);