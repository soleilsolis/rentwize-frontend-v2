import { Modal } from '@/components/globals/Modal'
import PrimaryButton from '@/components/globals/PrimaryButton'
import { UserMinusIcon } from '@heroicons/react/24/solid'
import {
    Checkbox,
    Option,
    Select,
    Textarea,
} from '@material-tailwind/react'
import { useState } from 'react'

const Actions = () => {
    const [confirm, setConfirm] = useState(true)

    const controls = (
        <PrimaryButton color="red" children="Confirm" disabled={confirm} onClick={undefined} />
    )
    return (
        <>
            <Modal
                size="md"
                buttonColor="red"
                buttonIcon={<UserMinusIcon className="w-6 h-6" />}
                label="Remove Tenant"
                heading="Remove Tenant"
                controls={controls} buttonVariant={undefined} buttonSize={undefined}>
                <div className="space-y-2">
                    <Select label="Reason for Removal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Option>Eviction</Option>
                        <Option>End Of Contract</Option>
                        <Option>Tenant Leaving</Option>
                    </Select>

                    <Textarea label="Notes" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}></Textarea>

                    <Checkbox
                        label="Click to confirm remove tenant"
                        color="red"
                        onClick={() => setConfirm(!confirm)} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}                    />
                </div>
            </Modal>
        </>
    )
}

export default Actions
