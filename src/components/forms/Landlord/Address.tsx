import {
    Input,
    Option,
    Select,

} from '@/components/MaterialTailwind'

const Address = () => {
    return (
        <div className="space-y-4">
            <Input variant="outlined" label="Street Address" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />

            <Input
                variant="outlined"
                label="Address Line 2"
                name="addressLine2" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}            />

            <div className="md:flex gap-2.5 space-y-4 md:space-y-0">
                <Input
                    className="grow"
                    variant="outlined"
                    label="City"
                    name="city" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}                />
                <Select label="State" className="grow" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                </Select>
            </div>

            <div className="md:flex gap-2.5 space-y-4 md:space-y-0">
                <Input
                    className="grow"
                    variant="outlined"
                    name="zipCode"
                    label="Zip Code" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}                />
                <Input label="United States" disabled onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
            </div>
        </div>
    )
}

export default Address
