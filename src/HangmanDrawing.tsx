import styles_BodyParts from './HangmanDrawing-BodyParts.module.css';

const HEAD = <div key={0} className={styles_BodyParts.head} />;
const BODY = <div key={1} className={styles_BodyParts.body} />;
const RIGHT_ARM = <div key={2} className={styles_BodyParts.rightArm} />;
const LEFT_ARM = <div key={3} className={styles_BodyParts.leftArm} />;
const RIGHT_LEG = <div key={4} className={styles_BodyParts.rightLeg} />;
const LEFT_LEG = <div key={5} className={styles_BodyParts.leftLeg} />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number
};

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          width: '10px',
          height: '50px',
          background: 'black',
          position: 'absolute',
          top: 0,
          right: 0
        }}
      />
      <div
        style={{
          width: '200px',
          height: '10px',
          background: 'black',
          marginLeft: '120px'
        }}
      />
      <div
        style={{
          width: '10px',
          height: '400px',
          background: 'black',
          marginLeft: '120px'
        }}
      />
      <div
        style={{
          width: '250px',
          height: '10px',
          background: 'black'
        }}
      />
    </div>
  );
}
