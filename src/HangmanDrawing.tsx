import styles_Main from './HangmanDrawing-Main.module.css';
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
    <div className={styles_Main.container}>
      <div className={styles_Main.gallowsRope} />
      <div className={styles_Main.gallowsRodHorizontal} />
      <div className={styles_Main.gallowsRodVertical} />
      <div className={styles_Main.gallowsBase} />
      {BODY_PARTS.slice(0, numberOfGuesses)}
    </div>
  );
}
