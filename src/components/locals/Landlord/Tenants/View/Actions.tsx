import { Modal } from '@/components/globals/Modal'
import PrimaryButton from '@/components/globals/PrimaryButton'
import { UserMinusIcon } from '@heroicons/react/24/solid'
import {
    Button,
    Checkbox,
    Option,
    Select,
    Textarea,
    Typography,
} from '@material-tailwind/react'
import { useState } from 'react'

const Actions = () => {
    const [confirm, setConfirm] = useState(false)

    const controls = (
        <PrimaryButton color="red" children="Confirm" disabled={confirm} />
    )
    return (
        <>
            <Modal
                size="md"
                buttonColor="red"
                buttonIcon={<UserMinusIcon className="w-6 h-6" />}
                label="Remove Tenant"
                heading="Remove Tenant"
                controls={controls}>
                <div className="space-y-2">
                    <Select label="Reason for Removal">
                        <Option>Eviction</Option>
                        <Option>End Of Contract</Option>
                        <Option>Tenant Leaving</Option>
                    </Select>

                    <Textarea label="Notes"></Textarea>

                    <Checkbox
                        label="Click to confirm remove tenant"
                        color="red"
                        onClick={() => setConfirm(!confirm)}
                    />
                </div>
            </Modal>
        </>
    )
}

export default Actions
