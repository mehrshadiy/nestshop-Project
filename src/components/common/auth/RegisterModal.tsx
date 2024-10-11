import {Input, Modal} from "@/components";
import React from "react";
import {useForm} from "react-hook-form";
import {SubmitBtn} from "@/components/common/ui/form/SubmitBtn";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/Auth";
import {useUser} from "@/store/AuthContext";
import {useModal} from "@/store/ModalContext";
import {toast} from "react-toastify";
import {useBasket} from "@/hooks/use-basket";

interface Props {
    onClose: () => void
}

interface formData {
    username: string;
    email: string;
    password: string
}

export function RegisterModal({onClose}: Props) {

    const {register, handleSubmit, formState: {errors}} = useForm<formData>()
    const mutate = useMutation({mutationFn: registerApiCall})
    const{closeModal} = useModal()
    const {login} = useUser()
    const {uuid2user} = useBasket()

    const onSubmit = (data: formData) => {
        mutate.mutate(data, {
            onSuccess: (response) => {
                login(response.jwt, response.user)
                toast.success('Your registration was successful')
                closeModal()
                uuid2user()
            }
        })
    }

    return (
        <Modal title={'Register'} closeModal={onClose} bodyClassName={'py-8 px-5 xl:px-20'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input register={register('username', {required: true})} type={'text'} label={'Username :'}
                       errors={errors} {...{placeholder: 'Enter your username'}}/>
                <Input register={register('email', {required: "enter your email please"})} type={"email"}
                       label={"Email :"} errors={errors} {...{placeholder: 'Enter your Email'}}/>
                <Input register={register('password', {
                    required: "enter  your password please",
                    minLength: {value: 4, message: "Password must be at least 4 characters"}
                })} type={'password'} label={'Password :'} errors={errors}  {...{placeholder: 'Enter your password'}}/>
                <SubmitBtn btnText={'Submit'} className={'mt-4'}/>
            </form>
        </Modal>
    );
}