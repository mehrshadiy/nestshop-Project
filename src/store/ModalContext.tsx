import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface Props {
    children: ReactNode
}

interface ContextProps {
    currentModal: ModalType
    openModal: (modalName: ModalType) => void
    closeModal: () => void
}

type ModalType = null | 'register' | 'login'

const ModalContext = createContext<ContextProps>({
    currentModal : null,
    openModal: ()=> {},
    closeModal: ()=> {}
})

export const useModal = () => useContext(ModalContext)

export const ModalContextProvider = ({children}: Props) => {

    useEffect(() => {
        const hash = window.location.hash.substring(1)
        if (hash.includes('-modal')){
            const modalName = hash.split('-')[0] as ModalType
            setShowModal(modalName)
        }
    }, []);

    const [showModal, setShowModal] = useState<ModalType>(null)
    
    const openModal = (modalName: ModalType) => {
      setShowModal(modalName)
    }

    const closeModal = () => {
        setShowModal(null)
    }

    return(
      <ModalContext.Provider value={{currentModal: showModal, openModal: openModal, closeModal: closeModal }}>
          {children}
      </ModalContext.Provider>
  )
}

