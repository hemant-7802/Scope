import React from 'react'
import { Button, Input } from "@nextui-org/react";
import { EyeFilledIcon } from './EyeFilledIcon ';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon ';
import img from "../../assets/scope_logo.png"

export default function SignUp() {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('')
    const [cnfPass, setCnfPass] = React.useState('')
    const [passVisible, setPassVisible] = React.useState(false);
    const [cnfPassVisible, setCnfPassVisible] = React.useState(false);

    const passVisibility = () => setPassVisible(!passVisible);
    const cnfPassVisibility = () => setCnfPassVisible(!cnfPassVisible);

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
        if (email === "") return false;

        return validateEmail(email) ? false : true;
    }, [email]);

    return (
        <>
            <form action="" className='space-y-8'>
                <Input
                    size='md'
                    type="text"
                    label="Name"
                    isClearable
                    value={name}
                    onValueChange={setName}
                />
                <Input
                    size='md'
                    value={email}
                    type="email"
                    label="Email"
                    isClearable
                    isInvalid={isInvalid}
                    color={isInvalid ? "danger" : ""}
                    errorMessage={isInvalid && "Please enter a valid email"}
                    onValueChange={setEmail}
                />
                <Input
                    size='md'
                    value={pass}
                    type={passVisible ? "text" : "password"}
                    label="Password"
                    onValueChange={setPass}
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={passVisibility}>
                            {passVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                />
                <Input
                    size='md'
                    value={cnfPass}
                    type={cnfPassVisible ? "text" : "password"}
                    label="Confirm Password"
                    onValueChange={setCnfPass}
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={cnfPassVisibility}>
                            {cnfPassVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                />
                <Button color='primary' className='w-full'>Register</Button>
            </form>
        </>
    )
}