import { Input, Option, Select } from '@/components/MaterialTailwind'

const FactsAndFeatures = (_props: any) => {
    return (
        <div className="space-y-4">
  

            <Select label="Type" className="grow" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>

            <Input variant="outlined" label="Year built" name="" type="year" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />

            <Input variant="outlined" label="Lot Size (Acres)" name="" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />

            <Input variant="outlined" label="Lot Size (Acres)" name="" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
        </div>
    )
}

export default FactsAndFeatures
