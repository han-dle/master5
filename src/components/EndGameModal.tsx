import { ReactComponent as Close } from '../data/Close.svg'
import Modal from 'react-modal'
import Fail from '../data/Cross.png'

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root')

type Props = {
  isOpen: boolean
  handleClose: () => void
  styles: any
  darkMode: boolean
  gameState: string
  state: any
  currentStreak: number
  longestStreak: number
  answer: string
  playAgain: () => void
  avgGuessesPerGame: number
}

const avgGuessesPerGameGreatThreshold = 2.8
const avgGuessesPerGameGoodThreshold = 3.0
const avgGuessesPerGameOkayThreshold = 3.2

const streakOkayThreshold = 5
const streakGoodThreshold = 20
const streakGreatThreshold = 50

function avgGuessesClass(avgGuessesPerGame: number): string {
  if (avgGuessesPerGame <= avgGuessesPerGameGreatThreshold) {
    return 'text-red-600'
  } else if (avgGuessesPerGame <= avgGuessesPerGameGoodThreshold) {
    return 'text-orange-500'
  } else if (avgGuessesPerGame <= avgGuessesPerGameOkayThreshold) {
    return 'text-yellow-500'
  } else {
    return ''
  }
}

function currentStreakClass(currentStreak: number): string {
  if (currentStreak >= streakGreatThreshold) {
    return 'text-red-600'
  } else if (currentStreak >= streakGoodThreshold) {
    return 'text-orange-500'
  } else if (currentStreak >= streakOkayThreshold) {
    return 'text-yellow-500'
  } else {
    return ''
  }
}

export const EndGameModal = ({
  isOpen,
  handleClose,
  styles,
  darkMode,
  gameState,
  state,
  currentStreak,
  longestStreak,
  answer,
  playAgain,
  avgGuessesPerGame,
}: Props) => {
  const PlayAgainButton = () => {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <button
          autoFocus
          type="button"
          className="rounded-lg px-6 py-2 mt-8 text-lg nm-flat-background dark:nm-flat-background-dark hover:nm-inset-background dark:hover:nm-inset-background-dark text-primary dark:text-primary-dark"
          onClick={playAgain}
        >
          다시 시작
        </button>
      </div>
    )
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={styles}
      contentLabel="Game End Modal"
    >
      <div className={darkMode ? 'dark' : ''}>
        <div className="h-full flex flex-col items-center justify-center max-w-[300px] mx-auto text-primary dark:text-primary-dark">
          <button
            className="absolute top-4 right-4 rounded-full nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark p-1 w-6 h-6 sm:p-2 sm:h-8 sm:w-8 hover:nm-inset-background dark:hover:nm-inset-background-dark"
            onClick={handleClose}
          >
            <Close />
          </button>
          {gameState === state.won && (
            <>
              <h1 className=" text-3xl">성공! 🎉</h1>
              <dl className="mt-5 grid grid-cols-1 gap-5">
                <div className="rounded-lg p-4 flex-grow relative nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark">
                  <dt className="text-sm font-medium truncate">현재 연승 기록</dt>
                  <dd
                    className={`mt-1 text-3xl font-semibold ${currentStreakClass(currentStreak)}`}
                  >
                    {currentStreak}
                    {currentStreak >= streakOkayThreshold && '🔥'}
                    {currentStreak >= streakGoodThreshold && '🔥'}
                    {currentStreak >= streakGreatThreshold && '🔥'}
                  </dd>
                </div>

                {avgGuessesPerGame > 0 && (
                  <div className="rounded-lg p-4 flex-grow relative nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark">
                    <dt className="text-sm font-medium truncate">이번 연속 기록 중 평균 제출 수</dt>
                    <dd
                      className={`mt-1 text-3xl font-semibold ${avgGuessesClass(
                        avgGuessesPerGame
                      )}`}
                    >
                      {avgGuessesPerGame.toFixed(1)}
                      {avgGuessesPerGame <= avgGuessesPerGameOkayThreshold && '🔥'}
                      {avgGuessesPerGame <= avgGuessesPerGameGoodThreshold && '🔥'}
                      {avgGuessesPerGame <= avgGuessesPerGameGreatThreshold && '🔥'}
                    </dd>
                  </div>
                )}

                <div className="rounded-lg p-4 flex-grow relative nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark">
                  <dt className="text-sm font-medium truncate">최고 연승 기록</dt>
                  <dd className="mt-1 text-3xl font-semibold">{longestStreak}</dd>
                </div>
              </dl>
            </>
          )}
          {gameState === state.lost && (
            <>
              <img src={Fail} alt="success" height="auto" width="80%" />
              <div className="text-primary dark:text-primary-dark text-4xl text-center">
                <p>실패!</p>
                <p className="mt-3 text-2xl">
                  정답은 <strong>{answer}</strong>
                </p>
                <p className="mt-6 text-base">
                  현재 <strong>{currentStreak}</strong>연승 {currentStreak > 4 && '🔥'}
                </p>
                <p className="text-base">
                  최고 연승 기록: <strong>{longestStreak}</strong>
                </p>
              </div>
            </>
          )}
          <PlayAgainButton />
        </div>
      </div>
    </Modal>
  )
}
