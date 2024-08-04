import {
    Input,
    Option,
    Select,

} from '@/components/MaterialTailwind'

const Address = props => {
    return (
        <div className="space-y-4">
            <Input variant="outlined" label="Street Address" />

            <Input
                variant="outlined"
                label="Address Line 2"
                name="addressLine2"
            />

            <div className="md:flex gap-2.5 space-y-4 md:space-y-0">
                <Input
                    className="grow"
                    variant="outlined"
                    label="City"
                    name="city"
                />
                <Select label="State" className="grow">
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
                    label="Zip Code"
                />
                <Input label="United States" disabled />
            </div>
        </div>
    )
}

export default Address
