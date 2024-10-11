import {IconBox, Input, Modal, SubmitBtn} from "@/components";
import React from "react";
import {useModal} from "@/store/ModalContext";
import {useMutation} from "@tanstack/react-query";
import {loginApiCall} from "@/api/Auth";
import {useForm} from "react-hook-form";
import {useUser} from "@/store/AuthContext";
import {toast} from "react-toastify";
import {useBasket} from "@/hooks/use-basket";

interface Props {
    onClose: () => void
}

interface formData {
    identifier: string;
    password: string
}

export function LoginModal({onClose}: Props) {

    const {register, handleSubmit, formState: {errors}} = useForm<formData>()
    const {openModal, closeModal} = useModal()
    const mutate = useMutation({mutationFn: loginApiCall})
    const {login} = useUser()
    const {uuid2user} = useBasket()

    const onSubmit = (data: formData) => {
        mutate.mutate(data, {
            onSuccess: (response) => {
                login(response.jwt, response.user)
                toast.success('login successfully')
                closeModal()
                uuid2user()
            }
        })
    }
    return (
        <Modal title={"Login"} closeModal={onClose} bodyClassName={'py-8 px-5 xl:px-20'}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Input register={register('identifier', {required: true})} type={'text'} label={'Username :'}
                       errors={errors} {...{placeholder: 'Enter your username'}}/>
                <Input register={register('password', {
                    required: "enter  your password please",
                    minLength: {value: 4, message: "Password must be at least 4 characters"}
                })} type={'password'} label={'Password :'} errors={errors}  {...{placeholder: 'Enter your password'}}/>
                <SubmitBtn btnText={'Submit'} className={'mt-1 mb-8'}/>
            </form>
            <span className={'text-green-700 font-bold text-sm flex'} onClick={() => openModal('register')}>Register Now <IconBox icon={'icon-arrow-small-right pt-0.5'}/></span>
        </Modal>
    );
}