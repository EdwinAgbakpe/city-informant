/* eslint-disable no-nested-ternary */
import { Button } from '@components/Button';

interface IScoreCard{
  correct: number,
  total: number,
  onPlay: () => void,
  onQuit: ()=> void
}
export const ScoreCard = function ({
  correct, total, onPlay, onQuit,
}:IScoreCard) {
  return (
    <div id="scoreCard" className="w-1/3 bg-white rounded-xl shadow-lg p-8 flex flex-wrap flex-col content-center space-y-12">
      <div className="flex flex-col content-center space-y-4">
        <h4 className="text-center font-hand text-3xl text-blue">
          {correct < 4 ? 'Damn, that bad huh...' : correct < 7 ? 'Not bad!' : correct < 10 ? 'Great Job!' : 'Did you cheat?'}
        </h4>
        <h3 className="text-center text-4xl font-light text-black">
          You got
          <span className="text-green text-5xl font-semibold">
            {' '}
            {correct}
            /
            {total}
            {' '}
          </span>
          right!
        </h3>
      </div>
      <div className="flex flex-wrap flex-row space-x-12">
        <Button
          text="Play"
          isPrimary
          isCancel={false}
          onClick={onPlay}
        />
        <Button
          text="Quit"
          isPrimary
          isCancel
          onClick={onQuit}
        />
      </div>
    </div>
  );
};
