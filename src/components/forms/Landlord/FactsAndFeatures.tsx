import { Input, Option, Select, Typography } from '@/components/MaterialTailwind'

const FactsAndFeatures = props => {
    return (
        <div className="space-y-4">
  

            <Select label="Type" className="grow">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>

            <Input variant="outlined" label="Year built" name="" type="year" />

            <Input variant="outlined" label="Lot Size (Acres)" name="" />

            <Input variant="outlined" label="Lot Size (Acres)" name="" />
        </div>
    )
}

export default FactsAndFeatures
