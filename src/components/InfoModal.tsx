import Modal from 'react-modal'
import { ReactComponent as Github } from '../data/Github.svg'
import { ReactComponent as Close } from '../data/Close.svg'

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root')

type Props = {
  isOpen: boolean
  handleClose: () => void
  darkMode: boolean
  styles: any
}

export const InfoModal = ({ isOpen, handleClose, darkMode, styles }: Props) => (
  <Modal isOpen={isOpen} onRequestClose={handleClose} style={styles} contentLabel="Game Info Modal">
    <div className={`h-full ${darkMode ? 'dark' : ''}`}>
      <button
        className="absolute top-4 right-4 rounded-full nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark p-1 w-6 h-6 sm:p-2 sm:h-8 sm:w-8 hover:nm-inset-background dark:hover:nm-inset-background-dark"
        onClick={handleClose}
      >
        <Close />
      </button>
      <div className="h-full flex flex-col items-center justify-center max-w-[390px] mx-auto pt-9 text-primary dark:text-primary-dark">
        <div className="flex-1 w-full sm:text-base text-sm">
          <h1 className="text-center sm:text-3xl text-2xl">게임 방법</h1>
          <ul className="list-disc pl-5 block sm:text-base text-sm">
            <li className="mt-6 mb-2">정답을 맞히기 위한 6번의 기회가 주어집니다.</li>
            <li className="mb-2">말이 되는 단어를 적어주세요.</li>
            <li className="mb-2">ㅖ는 ㅔㅔ와 같이 풀어 쓰고, ㅢ는 ㅡㅣ와 같이 풀어씁니다.</li>
            <li className="mb-2">
              답을 제출한 뒤, 각 글자가 초록, 노랑, 회색 중 하나로 변합니다.
            </li>
          </ul>
          <div className="mb-3 mt-8 flex items-center">
            <span className="nm-inset-n-green text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full">
              W
            </span>
            <span className="mx-2">=</span>
            <span>글자와 자리가 모두 맞습니다.</span>
          </div>
          <div className="mb-3">
            <span className="nm-inset-yellow-500 text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full">
              W
            </span>
            <span className="mx-2">=</span>
            <span>글자는 맞지만 자리가 잘못되었습니다.</span>
          </div>
          <span className="nm-inset-n-gray text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full">
            W
          </span>
          <span className="mx-2">=</span>
          <span>틀린 글자입니다.</span>
        </div>
        <div className="flex justify-center sm:text-base text-sm">
          <span>This project is open source on</span>
          <a
            className="ml-[6px] rounded-full h-5 w-5 sm:h-6 sm:w-6"
            href="https://github.com/han-dle/master5"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  </Modal>
)
